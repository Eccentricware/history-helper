export const updateDeckTicketsQuery16 = `
  UPDATE decks
  SET
    tickets_16 = CASE
      WHEN selected = true THEN 1
      ELSE tickets_16 + 1
    END,
    tournaments_16 = CASE
      WHEN selected = true THEN tournaments_16 + 1
      ELSE tournaments_16
    END,
    points_per_tournament_16 = CASE
      WHEN selected = true THEN CAST(points_16 as NUMERIC) / (tournaments_16 + 1)
      ELSE points_per_tournament_16
    END,
    selected = false;
`;