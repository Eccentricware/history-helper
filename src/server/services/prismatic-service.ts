import { db } from "../../database/connections";
import { genericlyRandomizeArray } from "../utils/randomizers";

export class PrismaticService {
  async getStandings(league: number): Promise<any> {
    const allDecks = await db.pristmaticRepo.getStandings(league);

    return allDecks;
  }

  async createTournament(name: string, deckCount: number): Promise<void> {
    const deckIds = await this.getDecksForTournament(deckCount);

    await db.pristmaticRepo.selectDecks(deckIds);
    await db.pristmaticRepo.createTournament(name, deckIds);
  }

  compareNumbers(a: number, b: number) {
    return a - b;
  };

  async getDecksForTournament(deckCount: number): Promise<any> {
    const decksReady = await db.pristmaticRepo.getContructedDecks();

    const deckGroups: Record<number, Record<number, any>> = this.randomizeSelectedDecks(decksReady, deckCount);

    const orderedDecks: any[] = [];
    let newCombers = [];

    const pointGroups = Object.keys(deckGroups).map((val: string) => Number(val));
    pointGroups.sort(this.compareNumbers);

    for (let pointIndex = pointGroups.length - 1; pointIndex >= 0; pointIndex--) {
      const points = pointGroups[pointIndex];
      const tourneyCountGroups = Object.keys(deckGroups[points]).map((val: string) => Number(val));
      tourneyCountGroups.sort(this.compareNumbers);

      for (let countIndex = 0; countIndex < tourneyCountGroups.length; countIndex++) {
        const tournamentCount = tourneyCountGroups[countIndex];

        const randomizedDecks = genericlyRandomizeArray(deckGroups[points][tournamentCount]);

        if (points === 0 && tournamentCount === 0) {
          newCombers = randomizedDecks;
        } else {
          orderedDecks.push(...randomizedDecks);
        }
      }
    }

    if (newCombers.length > 0) {
      orderedDecks.push(...newCombers);
    }

    const idArray = orderedDecks.map((deck: any) => deck.deckId);

    return idArray;
  }

  randomizeSelectedDecks(decksReady: any[], deckCount: number) {
    const selectedDecks: any = [];
    const pointGroups: Record<number, any> = {};

    let totalTickets = decksReady.reduce((acc: number, deck: any) => acc + deck.tickets16, 0);
    while (selectedDecks.length < deckCount) {
      const winningTicket = Math.ceil(Math.random() * totalTickets);
      let ticketsChecked = 0;
      let winningIndex: number = -1;

      decksReady.forEach((deck: any, index: number) => {
        if (winningTicket - ticketsChecked <= deck.tickets16 && winningIndex === -1) {
          winningIndex = index;
        } else {
          ticketsChecked += deck.tickets16;
        }
      });

      const winningDeck = decksReady[winningIndex];
      selectedDecks.push(winningDeck);
      const deckPointsPerTournament = Number(winningDeck.pointsPerTournament16);
      const deckTournaments = winningDeck[`tournaments${deckCount}`];

      if (pointGroups[deckPointsPerTournament]) {
        if (pointGroups[deckPointsPerTournament][deckTournaments]) {
          pointGroups[deckPointsPerTournament][deckTournaments].push(winningDeck);
        } else {
          pointGroups[deckPointsPerTournament][deckTournaments] = [winningDeck];
        }
      } else {
        pointGroups[deckPointsPerTournament] = {};
        pointGroups[deckPointsPerTournament][deckTournaments] = [winningDeck];
      }

      totalTickets -= winningDeck.tickets16;
      decksReady.splice(winningIndex, 1);
    }

    return pointGroups;
  }

  async reportScores16(scores: Record<number | string, number>) {
    const reportingPromises = [];
    for (let deck in scores) {
      reportingPromises.push(db.pristmaticRepo.reportScore16(deck, scores[deck], Number(deck) > 0));
    }

    Promise.all(reportingPromises)
      .then(() => {
        db.pristmaticRepo.updateDeckTickets();
        db.pristmaticRepo.resolveTournaments();
      });
  }

}
