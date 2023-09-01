export const getAllDecksQuery = `
  SELECT *
  FROM decks
  ORDER BY constructed DESC,
    points_per_tournament_16 DESC,
    tournaments_16;
`;

