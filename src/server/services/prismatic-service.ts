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

    const deckGroups: Record<number, any[]> = this.randomizeSelectedDecks(decksReady, deckCount);

    const orderedDecks: any[] = [];

    const pointGroups = Object.keys(deckGroups).map((val: string) => Number(val));
    pointGroups.sort(this.compareNumbers);

    pointGroups.forEach((point: number) => {
      const deckGroup: any[] = deckGroups[point];
      orderedDecks.unshift(...deckGroup);
    });

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

      if (deckTournaments > 0) {
        if (pointGroups[deckPointsPerTournament]) {
          pointGroups[deckPointsPerTournament].push(winningDeck);
        } else {
          pointGroups[deckPointsPerTournament] = [winningDeck];
        }

      } else {
        if (pointGroups[-1]) {
          pointGroups[-1].push(winningDeck);
        } else {
          pointGroups[-1] = [winningDeck];
        }
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
