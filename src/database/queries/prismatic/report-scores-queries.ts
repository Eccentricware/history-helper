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

// Just preserving from postgres
// SELECT
// 	d.points_per_tournament_16 || ' | ' || d.deck_name || ' | ' || d.tickets_16,
// 	d.deck_id,
// 	d.tickets_16,
// 	d.points_per_tournament_16,
// 	d.deck_name
// FROM decks d
// INNER JOIN tournaments t ON d.deck_id = any(t.seed_order)
// WHERE t.status = 'Playing'
// ORDER by array_position(t.seed_order, d.deck_id)