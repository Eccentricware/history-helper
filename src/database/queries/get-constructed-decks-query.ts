export const getConstructedDecksQuery = `
  SELECT *
  FROM decks
  WHERE constructed = true
  ORDER BY points_per_tournament DESC,
    tournaments;
`;