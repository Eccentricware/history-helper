export interface DeckResult {
  deck_id: number;
  deck_name: string;
  color_id: string;
  commander: string;
  points_per_tournament_16: number;
  points_16: number;
  tournaments_16: number;
  tickets_16: number;
}

export interface Deck {
  deckId: number;
  deckName: string;
  colorId: string;
  commander: string;
  pointsPerTournament16: number;
  points16: number;
  tournaments16: number;
  tickets16: number;
}
