import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getAllDecksQuery } from "../queries/get-all-decks-query";
import { getConstructedDecksQuery } from "../queries/get-constructed-decks-query";
import { createTournamentQuery } from "../queries/create-tournament-query";

export class PrismaticRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getAllDecks(): Promise<any> {
    const decks = this.db.many(getAllDecksQuery);
    return decks;
  }

  async getContructedDecks(): Promise<any> {
    const decks = this.db.many(getConstructedDecksQuery);
    return decks;
  }

  async createTournament(name: string, deckIds: number[]): Promise<void> {
    const query = new ParameterizedQuery({
      text: createTournamentQuery,
      values: [name, deckIds]
    });

    await this.db.none(query);
  }
}