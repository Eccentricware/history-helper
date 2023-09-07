export const reportScoreByIdQuery16 = `
  UPDATE decks
  SET points_16 = points_16 + $1
  WHERE deck_id = $2;
`;

export const reportScoreByNameQuery16 = `
  UPDATE decks
  SET points_16 = points_16 + $1
  WHERE deck_name = $2;
`;