export const getFightersQuery = `
  SELECT
    f.fighter_id,
    f.name,
    f.clone_id,
    fd.tickets
  FROM fighters f
  INNER JOIN fighter_details fd ON fd.fighter_id = f.fighter_id
  WHERE fd.player_id = $1
    AND fd.pool_size = $2
  ORDER BY fighter_id;
`