--sudo -u postgres psql < database/schema/helper_schema.sql
--sudo -u postgres psql < src/database/schema/helper_schema.sql

DROP DATABASE IF EXISTS helper_dev;
CREATE DATABASE helper_dev;

\c helper_dev;
SET TIME ZONE 'utc';

CREATE TABLE IF NOT EXISTS decks(
  deck_id SERIAL,
  color_id VARCHAR(5) NOT NULL,
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
  points INTEGER,
  tournaments INTEGER,
  points_per_tournament DECIMAL,
  tickets_16 INTEGER DEFAULT 1,
  points_16 INTEGER,
  tournaments_16 INTEGER,
  points_per_tournament_16 DECIMAL,
  tickets_32 INTEGER DEFAULT 1,
  points_32 INTEGER,
  tournaments_32 INTEGER,
  points_per_tournament_32 DECIMAL,
  tickets_64 INTEGER DEFAULT 1,
  points_64 INTEGER,
  tournaments_64 INTEGER,
  points_per_tournament_64 DECIMAL,
  selected BOOLEAN,
  PRIMARY KEY(deck_id),
  FOREIGN KEY(teammate_id)
    REFERENCES decks(deck_id)
);

CREATE TABLE IF NOT EXISTS tournaments(
  tournament_id SERIAL PRIMARY KEY,
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
  seeded BOOLEAN,
  seed_order INTEGER[]
);

/*
CREATE TABLE IF NOT EXISTS matches(
  match_id SERial PRIMARY KEY,
  tournament_id INTEGER REFERENCES tournaments(tournament_id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  round INTEGER,
  match_number INTEGER
)

CREATE TABLE IF NOT EXISTS participants(
  participant_id SERIAL PRIMARY KEY,
  tournament_id INTEGER REFERENCES tournaments(tournament_id),
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS participants_in_tournaments(
  pit_id SERIAL PRIMARY KEY,
  participant_id INTEGER REFERENCES participants(participant_id),
  tournament_id INTEGER REFERENCES tournaments(tournament_id)
);

CREATE TABLE IF NOT EXISTS participants_in_matches(
  pim_id SERIAL PRIMARY KEY,
  participant_id INTEGER REFERENCES participants(participant_id),
  match_id INTEGER REFERENCES matches(match_id),
  score INTEGER,
  rank INTEGER,
  winner BOOLEAN,
  pros VARCHAR(1000),
  cons VARCHAR(1000),
  mvp VARCHAR(255)
);
*/