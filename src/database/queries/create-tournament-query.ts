export const createTournamentQuery = `
  INSERT INTO tournaments (name, seed_order)
  VALUES ($1, $2);
`;