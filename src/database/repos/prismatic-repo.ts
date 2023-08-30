import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";

export class PrismaticRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getAllDecks(): Promise<any> {
    const getAllDecksQuery = new ParameterizedQuery({
      text: 'SELECT * FROM decks'
    });

    const decks = this.db.many(getAllDecksQuery);
    return decks;
  }
}