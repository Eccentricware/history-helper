import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getAllDecksQuery } from "../queries/get-all-decks-query";
import { getConstructedDecksQuery } from "../queries/get-constructed-decks-query";

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
}