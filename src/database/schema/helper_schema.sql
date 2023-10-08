--sudo -u postgres psql < database/schema/helper_schema.sql
--sudo -u postgres psql < src/database/schema/helper_schema.sql

DROP DATABASE IF EXISTS helper_dev;
CREATE DATABASE helper_dev;

\c helper_dev;
SET TIME ZONE 'utc';

CREATE TABLE IF NOT EXISTS decks(
  deck_id SERIAL,
  color_id VARCHAR(5) NOT NULL,
  color_id_number INTEGER,
  color_sort_order INTEGER,
  deck_name VARCHAR(255),
  commander VARCHAR(255),
  partner VARCHAR(255),
  theme VARCHAR(1000),
  description VARCHAR(1000),
  constructed BOOLEAN,
  flagged BOOLEAN,
  feedback VARCHAR(1000),
  teammate_id INTEGER,
  tickets INTEGER DEFAULT 1,
  points INTEGER DEFAULT 0,
  tournaments INTEGER DEFAULT 0,
  points_per_tournament DECIMAL DEFAULT 0,
  tickets_16 INTEGER DEFAULT 1,
  points_16 INTEGER DEFAULT 0,
  tournaments_16 INTEGER DEFAULT 0,
  points_per_tournament_16 NUMERIC(8, 3) DEFAULT 0,
  tickets_32 INTEGER DEFAULT 1,
  points_32 INTEGER DEFAULT 0,
  tournaments_32 INTEGER DEFAULT 0,
  points_per_tournament_32 DECIMAL DEFAULT 0,
  tickets_64 INTEGER DEFAULT 1,
  points_64 INTEGER DEFAULT 0,
  tournaments_64 INTEGER DEFAULT 0,
  points_per_tournament_64 DECIMAL DEFAULT 0,
  selected BOOLEAN,
  PRIMARY KEY(deck_id),
  FOREIGN KEY(teammate_id)
    REFERENCES decks(deck_id)
);

CREATE TABLE IF NOT EXISTS tournaments(
  tournament_id SERIAL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  game_type VARCHAR(255),
  participant_count INTEGER,
  participant_ids INTEGER[],
  participants_per_match INTEGER,
  format VARCHAR(255),
  elimination_type VARCHAR(255),
  start_time TIMESTAMP,
  status VARCHAR(255) DEFAULT 'Playing',
  seeded BOOLEAN,
  seed_order INTEGER[],
  PRIMARY KEY(tournament_id)
);

CREATE TABLE IF NOT EXISTS fighters(
  fighter_id SERIAL,
  name VARCHAR(255) NOT NULL,
  key VARCHAR(255) NOT NULL,
  favor INTEGER DEFAULT 0,
  tickets INTEGER DEFAULT 0,
  tickets_ss3 INTEGER DEFAULT 0,
  tickets_ss5 INTEGER DEFAULT 0,
  champion_rating INTEGER DEFAULT 1,
  champion_rating_ss3 INTEGER DEFAULT 1,
  champion_rating_ss5 INTEGER DEFAULT 1,
  default_img INTEGER,
  selected BOOLEAN DEFAULT false,
  selected_ss3 BOOLEAN DEFAULT false,
  selected_ss5 BOOLEAN DEFAULT false,
  clone_id INTEGER,
  smash_id VARCHAR(4)
);