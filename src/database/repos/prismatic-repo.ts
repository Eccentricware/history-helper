import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getAllDecksQuery, getStandings16Query, getStandings64Query } from "../queries/get-all-decks-query";
import { getConstructedDecksQuery } from "../queries/get-constructed-decks-query";
import { createTournamentQuery } from "../queries/create-tournament-query";
import { updateDeckTicketsQuery16 } from "../queries/update-deck-tickets-querty";
import { reportScoreByIdQuery16, reportScoreByNameQuery16 } from "../queries/report-scores-queries";
import { resolveTournamentsQuery } from "../queries/resolve-tournaments-query";
import { setDecksSelectedQuery } from "../queries/set-decks-selected-query";
import { DeckResult, Deck } from "../../models/deck-objects";
import { getCurrentlySelectedQuery } from "../queries/get-currently-selected-query";

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
    const decksReturned: DeckResult[] = await this.db.many<DeckResult>(getConstructedDecksQuery);

    const decks: Deck[] = decksReturned.map((deck: DeckResult) => {
      return <Deck> {
        deckId: deck.deck_id,
        deckName: deck.deck_name,
        colorId: deck.color_id,
        commander: deck.commander,
        pointsPerTournament16: Number(deck.points_per_tournament_16),
        points16: deck.points_16,
        tournaments16: deck.tournaments_16,
        tickets16: deck.tickets_16
      };
    });

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

  async getSelectedDecks(): Promise<any> {
    const decksReturned: DeckResult[] = await this.db.many<DeckResult>(getCurrentlySelectedQuery);

    const decks: Deck[] = decksReturned.map((deck: DeckResult) => {
      return <Deck> {
        deckId: deck.deck_id,
        deckName: deck.deck_name,
        colorId: deck.color_id,
        commander: deck.commander,
        pointsPerTournament16: Number(deck.points_per_tournament_16),
        points16: deck.points_16,
        tournaments16: deck.tournaments_16,
        tickets16: deck.tickets_16
      };
    });

    return decks;
  }
}