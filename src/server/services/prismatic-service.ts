import { db } from "../../database/connections";
import { genericlyRandomizeArray } from "../utils/randomizers";

export class PrismaticService {
  async getFullStandings(): Promise<any> {
    const allDecks = await db.pristmaticRepo.getAllDecks();

    return allDecks;
  }

  async createTournament(name: string, deckCount: number): Promise<void> {
    const deckIds = await this.getDecksForTournament(deckCount);

    await db.pristmaticRepo.createTournament(name, deckIds);
  }

  async getDecksForTournament(deckCount: number): Promise<any> {
    const decksReady = await db.pristmaticRepo.getContructedDecks();

    const deckGroups: Record<number, Record<number, any>> = this.randomizeSelectedDecks(decksReady, deckCount);

    const orderedDecks: any[] = [];
    let newCombers = [];

    const pointGroups = Object.keys(deckGroups).map((val: string) => Number(val)).sort();

    for (let pointIndex = pointGroups.length - 1; pointIndex >= 0; pointIndex--) {
      const points = pointGroups[pointIndex];
      const tourneyCountGroups = Object.keys(deckGroups[points]).sort().map((val: string) => Number(val));

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

    const idArray = orderedDecks.map((deck: any) => deck.deck_id);

    return idArray;
  }

  randomizeSelectedDecks(decksReady: any[], deckCount: number) {
    let totalTickets = decksReady.reduce((acc: number, deck: any) => acc + deck.tickets, 0);
    const selectedDecks: any = [];
    const pointGroups: Record<number, any> = {};

    while (selectedDecks.length < deckCount) {
      const winningTicket = Math.ceil(Math.random() * totalTickets);
      let ticketsChecked = 0;
      let winningIndex: number = -1;

      decksReady.forEach((deck: any, index: number) => {
        if (winningTicket - ticketsChecked <= deck.tickets && winningIndex === -1) {
          winningIndex = index;
        }
        ticketsChecked += deck.tickets;
      });

      selectedDecks.push(decksReady[winningIndex]);
      const deckPointsPerTournament = Number(decksReady[winningIndex][`points_per_tournament_${deckCount}`]);
      const deckTournaments = decksReady[winningIndex][`tournaments_${deckCount}`];

      if (pointGroups[deckPointsPerTournament]) {
        if (pointGroups[deckPointsPerTournament][deckTournaments]) {
          pointGroups[deckPointsPerTournament][deckTournaments].push(decksReady[winningIndex]);
        } else {
          pointGroups[deckPointsPerTournament][deckTournaments] = [decksReady[winningIndex]];
        }
      } else {
        pointGroups[deckPointsPerTournament] = {};
        pointGroups[deckPointsPerTournament][deckTournaments] = [decksReady[winningIndex]];
      }
      totalTickets -= decksReady[winningIndex].tickets;
      decksReady.splice(winningIndex, 1);
    }

    return pointGroups;
  }

  async reportScores16(scores: Record<number | string, number>) {
    const reportingPromises = []
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
