export const saveSelectedFightersQuery = `
  UPDATE fighter_tickets
  SET selected = true
  WHERE player_id = $1
    AND fighter_id = ANY($2)
    AND pool_size = $3;
`;