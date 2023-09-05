export const resetDeckTicketsQuery = `
  UPDATE decks
  SET tickets_16 = 1
  WHERE deck_id IN ARRAY(deckIds);
`;