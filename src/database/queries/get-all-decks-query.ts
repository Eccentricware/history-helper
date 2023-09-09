export const getAllDecksQuery = `
  SELECT *
  FROM decks
  ORDER BY constructed DESC,
    points_per_tournament_16 DESC,
    tournaments_16,
    deck_name;
`;

export const getStandings16Query = `
  SELECT deck_name,
    color_id,
    commander,
    points_per_tournament_16,
    points_16,
    tournaments_16
  FROM decks
  ORDER BY constructed DESC,
    points_per_tournament_16 DESC,
    tournaments_16,
    color_sort_order,
    color_id_number;
`;

export const getStandings64Query = `
  SELECT deck_name,
    color_id,
    commander,
    points_per_tournament_64,
    points_64,
    tournaments_64
  FROM decks
  ORDER BY constructed DESC,
    points_per_tournament_64 DESC,
    tournaments_64,
    color_sort_order,
    color_id_number;
`;

