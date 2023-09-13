import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getAllDecksQuery, getStandings16Query, getStandings64Query } from "../queries/get-all-decks-query";
import { getConstructedDecksQuery } from "../queries/get-constructed-decks-query";
import { createTournamentQuery } from "../queries/create-tournament-query";
import { updateDeckTicketsQuery16 } from "../queries/update-deck-tickets-querty";
import { reportScoreByIdQuery16, reportScoreByNameQuery16 } from "../queries/report-scores-queries";
import { resolveTournamentsQuery } from "../queries/resolve-tournaments-query";
import { setDecksSelectedQuery } from "../queries/set-decks-selected-query";

export class PrismaticRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getAllDecks(): Promise<any> {
    const decks = this.db.many(getAllDecksQuery);
    return decks;
  }

  async getStandings(league: number): Promise<any> {
    if (league === 16) {
      return this.db.many(getStandings16Query);
    } else {
      return this.db.many(getStandings64Query);
    }
  }

  async getContructedDecks(): Promise<any> {
    const decks = this.db.many(getConstructedDecksQuery);
    return decks;
  }

  async selectDecks(deckIds: number[]): Promise<void> {
    const query = new ParameterizedQuery({
      text: setDecksSelectedQuery,
      values: deckIds
    });

    await this.db.none(query);
  }

  async createTournament(name: string, deckIds: number[]): Promise<void> {
    const query = new ParameterizedQuery({
      text: createTournamentQuery,
      values: [name, deckIds]
    });

    await this.db.none(query);
  }

  async updateDeckTickets(): Promise<void> {
    await this.db.query(updateDeckTicketsQuery16);
  }

  async reportScore16(deckIdentifier: string, score: number, useId: boolean): Promise<void> {
    const query = new ParameterizedQuery({
      text: useId ? reportScoreByIdQuery16 : reportScoreByNameQuery16,
      values: [score, deckIdentifier]
    });

    await this.db.none(query);
  }

  async resolveTournaments(): Promise<void> {
    await this.db.query(resolveTournamentsQuery);
  }
}