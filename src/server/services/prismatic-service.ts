import { db } from "../../database/connections";

export class PrismaticService {
  async getFullStandings(): Promise<any> {
    const allDecks = await db.pristmaticRepo.getAllDecks();

    return allDecks;
  }
}