import { db } from "../../database/connections";

export class PrismaticService {
  async getFullStandings(): Promise<any> {
    const allDecks = await db.pristmaticRepo.getAllDecks();

    return allDecks;
  }

  async getDecksForTournament(deckCount: number): Promise<any> {
    const decks = await db.pristmaticRepo.getContructedDecks();

    return decks;
  }
}