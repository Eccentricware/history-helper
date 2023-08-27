--sudo -u postgres psql < database/initialize-decks.sql

INSERT INTO
  decks(color_id, commander, partner, theme)
VALUES
  ('WUBRG', 'The First Sliver', null, 'Sliver Cascade'),
  ('WUBRG', 'Kenrith, the Returned King', null, 'Experience/Counters/Poison'),
  ('WB', 'Liesa, Forgotten Archangel', null, 'Exile');