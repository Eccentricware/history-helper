export const reset16DeckTicketsQuery = `
UPDATE decks
SET
  tickets_16 = CASE
    WHEN selected = true THEN 1
    ELSE tickets_16 + 1
  END,
  selected = false;
`;