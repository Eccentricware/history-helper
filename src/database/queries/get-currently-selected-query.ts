export const getCurrentlySelectedQuery = `
  SELECT
    d.points_per_tournament_16 || ' | ' || d.deck_name || ' | ' || d.tickets_16,
    d.deck_id,
    d.tickets_16,
    d.points_per_tournament_16,
    d.deck_name
  FROM decks d
  INNER JOIN tournaments t ON d.deck_id = any(t.seed_order)
  WHERE t.status = 'Playing'
  ORDER by array_position(t.seed_order, d.deck_id)
`;