export const getFighterFavorQuery = `
  SELECT f.fighter_id,
    f.name,
    f.key,
    f.default_img,
    f.smash_id,
    f.clone_id,
    ff.player_id,
    ff.favor
  FROM fighters f
  INNER JOIN fighter_favor ff ON ff.fighter_id = f.fighter_id
  WHERE ff.player_id = $1
`;

export const getRosterQuery = `
  SELECT
    f.fighter_id,
    f.name,
    f.clone_id,
    fd.tickets
  FROM fighters f
  INNER JOIN fighter_favor fd ON fd.fighter_id = f.fighter_id
  WHERE fd.pool_size = 1
  ORDER BY fighter_id;
`;

export const getFightersQuery = `
  SELECT
    f.fighter_id,
    f.name,
    f.clone_id,
    fd.tickets
  FROM fighters f
  INNER JOIN fighter_favor fd ON fd.fighter_id = f.fighter_id
  WHERE fd.player_id = $1
    AND fd.pool_size = $2
  ORDER BY fighter_id;
`
