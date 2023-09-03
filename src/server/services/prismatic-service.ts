import { db } from "../../database/connections";

export class PrismaticService {
  async getFullStandings(): Promise<any> {
    const allDecks = await db.pristmaticRepo.getAllDecks();

    return allDecks;
  }

  async getDecksForTournament(deckCount: number): Promise<any> {
    const decksReady = await db.pristmaticRepo.getContructedDecks();

    let totalTickets = decksReady.reduce((acc: number, deck: any) => acc + deck.tickets, 0);
    const selectedDecks: any = [];
    const pointGroups: Record<number, any> = {};
    const pointGroupArray = [];

    while (selectedDecks.length < deckCount) {
      const winningTicket = Math.ceil(Math.random() * totalTickets);
      let ticketsChecked = 0;
      let winningIndex: number | undefined = undefined;

      decksReady.forEach((deck: any, index: number) => {
        if (winningTicket - ticketsChecked <= deck.tickets && winningIndex === undefined) {
          winningIndex = index;
        }
        ticketsChecked += deck.tickets;
      });

      selectedDecks.push(decksReady[winningIndex!]);
      const deckPoints = decksReady[winningIndex!][`points_per_tournament_${deckCount}`];
      if (pointGroups[deckPoints]) {
        pointGroups[deckPoints].push(decksReady[winningIndex!]);
      } else {
        pointGroups[deckPoints] = [decksReady[winningIndex!]];
        pointGroupArray.push(deckPoints);
      }
      totalTickets -= decksReady[winningIndex!].tickets;
      decksReady.splice(winningIndex!, 1);
    }

    return selectedDecks;
  }
}