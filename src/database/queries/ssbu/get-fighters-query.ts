export const getFightersQuery = `
  SELECT
    fighter_id,
    name,
    clone_id,
  CASE
    WHEN $1 = 1 THEN tickets
    WHEN $1 = 3 THEN tickets_ss3
    WHEN $1 = 5 THEN tickets_ss5
    ELSE tickets_x
  END AS tickets,
  CASE
    WHEN $1 = 1 THEN selected
    WHEN $1 = 3 THEN selected_ss3
    WHEN $1 = 5 THEN selected_ss5
    ELSE selected_x
  END AS selected,
  CASE
    WHEN $1 = 1 THEN champion_rating
    WHEN $1 = 3 THEN champion_rating_ss3
    WHEN $1 = 5 THEN champion_rating_ss5
    ELSE champion_rating_x
  END AS champion_rating
  FROM fighters
  ORDER BY fighter_id;
`