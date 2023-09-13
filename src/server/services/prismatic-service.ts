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

  async getDecksForTournament(deckCount: number): Promise<any> {
    const decksReady = await db.pristmaticRepo.getContructedDecks();

    const deckGroups: Record<number, Record<number, any>> = this.randomizeSelectedDecks(decksReady, deckCount);

    const orderedDecks: any[] = [];
    let newCombers = [];

    const pointGroups = Object.keys(deckGroups).map((val: string) => Number(val));
    // pointGroups.sort();

    for (let pointIndex = pointGroups.length - 1; pointIndex >= 0; pointIndex--) {
      const points = pointGroups[pointIndex];
      const tourneyCountGroups = Object.keys(deckGroups[points]).map((val: string) => Number(val));
      // tourneyCountGroups.sort();

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
    const selectedDecks: any = [];
    const pointGroups: Record<number, any> = {};

    let totalTickets = decksReady.reduce((acc: number, deck: any) => acc + deck.tickets_16, 0);
    while (selectedDecks.length < deckCount) {
      const winningTicket = Math.ceil(Math.random() * totalTickets);
      let ticketsChecked = 0;
      let winningIndex: number = -1;

      decksReady.forEach((deck: any, index: number) => {
        if (winningTicket - ticketsChecked <= deck.tickets_16 && winningIndex === -1) {
          winningIndex = index;
        } else {
          ticketsChecked += deck.tickets_16;
        }
      });

      selectedDecks.push(decksReady[winningIndex]);
      const deckPointsPerTournament = Number(decksReady[winningIndex].points_per_tournament_16);
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
      totalTickets -= decksReady[winningIndex].tickets_16;
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
