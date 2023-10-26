--sudo -u postgres psql < src/database/initialize-fighters.sql

INSERT INTO fighters
(name,	key,	smash_id,	favor,	tickets,	champion_rating, default_img)
VALUES
('Mario',	'mario',	'1',	1053,	1053,	9, 5),
('Donkey Kong',	'donkeyKong',	'2',	5,	220,	0, 6),
('Link',	'link',	'3',	12634,	113706,	2, 7),
('Samus',	'samus',	'4',	100,	4400,	8, 4),
('Dark Samus',	'darkSamus',	'4e',	175,	7700,	3, 5),
('Yoshi',	'yoshi',	'5',	600,	4800,	15, 6),
('Kirby',	'kirby',	'6',	25,	1100,	2, 4),
('Fox',	'fox',	'7',	21,	924,	1, 5),
('Pikachu',	'pikachu',	'8',	125,	5500,	1, 3),
('Luigi',	'luigi',	'9',	15,	660,	4, 7),
('Ness',	'ness',	'10',	175,	7700,	4, 4),
('Captain Falcon',	'captainFalcon',	'11',	300,	13200,	8, 4),
('Jigglypuff',	'jigglypuff',	'12',	150,	6450,	1, 6),
('Peach',	'peach',	'13',	4212,	21060,	7, 3),
('Daisy',	'daisy',	'13e',	8423,	42115,	11, 6),
('Bowser',	'bowser',	'14',	275,	11825,	3, 5),
('Ice Climbers',	'iceClimbers',	'15',	15,	645,	2, 5),
('Sheik',	'sheik',	'16',	3,	129,	0, 5),
('Zelda',	'zelda',	'17',	400,	2800,	7, 4),
('Dr Mario',	'drMario',	'18',	100,	4300,	2, 6),
('Pichu',	'pichu',	'19',	2,	86,	2, 4),
('Falco',	'falco',	'20',	10,	430,	0, 4),
('Marth',	'marth',	'21',	275,	11825,	5, 4),
('Lucina',	'lucina',	'21e',	1053,	45279,	13, 7),
('Young Link',	'youngLink',	'22',	10,	430,	0, 4),
('Ganondorf',	'ganondorf',	'23',	25,	1075,	0, 4),
('Mewtwo',	'mewtwo',	'24',	80,	3440,	2, 7),
('Roy',	'roy',	'25',	44,	1892,	0, 4),
('Chrom',	'chrom',	'25e',	60,	2580,	2, 3),
('Mr Game & Watch',	'mrGameAndWatch',	'26',	7,	301,	1, 6),
('Meta Knight',	'metaKnight',	'27',	2,	86,	2, 4),
('Pit',	'pit',	'28',	115,	4945,	3, 5),
('Dark Pit',	'darkPit',	'28e',	40,	1680,	4, 2),
('Zero Suit Samus',	'zeroSuitSamus',	'29',	275,	11550,	0, 6),
('Wario',	'wario',	'30',	2,	84,	0, 3),
('Snake',	'snake',	'31',	5,	210,	3, 3),
('Ike',	'ike',	'32',	95,	3990,	0, 3),
('Pokemon Trainer',	'pokemonTrainer',	'33',	44,	528,	0, 6),
--('Squirtle',	'null',	33,	10,	0,	0, 6),
--('Ivysaur',	'null',	34,	10,	0,	0,),
--('Charizard',	'null',	35,	10,	0,	0),
('Diddy Kong',	'diddyKong',	'36',	13,	533,	3, 8),
('Lucas',	'lucas',	'37',	80,	240,	1, 5),
('Sonic',	'sonic',	'38',	25,	1000,	0, 4),
('King Dedede',	'kingDedede',	'39',	7,	280,	5, 6),
('Olimar',	'olimar',	'40',	5,	200,	2, 5),
('Lucario',	'lucario',	'41',	15,	600,	0, 6),
('R.O.B.',	'rob',	'42',	25,	1000,	4, 6),
('Toon Link',	'toonLink',	'43',	5,	200,	0, 1),
('Wolf',	'wolf',	'44',	12634,	50536,	24, 6),
('Villager',	'villager',	'45',	80,	2160,	1, 1),
('Mega Man',	'megaMan',	'46',	25268,	50536,	77, 3),
('Wii Fit Trainer',	'wiiFitTrainer',	'47',	80,	3200,	4, 6),
('Rosalina',	'rosalina',	'48',	18,	720,	1, 4),
('Little Mac',	'littleMac',	'49',	13,	507,	2, 6),
('Greninja',	'greninja',	'50',	2,	78,	1, 6),
('Mii Brawler',	'miiBrawler',	'51',	450,	17100,	4, 0),
('Mii Swordfighter',	'miiSwordfighter',	'52',	1053,	24219,	25, 0),
('Mii Gunner',	'miiGunner',	'53',	95,	3610,	2, 0),
('Palutena',	'palutena',	'54',	325,	12675,	12, 4),
('Pac-Man',	'pacMan',	'55',	4,	156,	2, 7),
('Tactician',	'tactician',	'56',	175,	6825,	1, 4),
('Shulk',	'shulk',	'57',	5,	195,	0, 5),
('Bowser Jr',	'bowserJr',	'58',	2,	78,	3, 1),
('Duck Hunt',	'duckHunt',	'59',	30,	1170,	1, 5),
('Ryu',	'ryu',	'60',	35,	1365,	0, 1),
('Ken',	'ken',	'60e',	35,	1365,	3, 7),
('Cloud',	'cloud',	'61',	1,	39,	0, 4),
('Corrin',	'corrin',	'62',	60,	2340,	2, 3),
('Bayonetta',	'bayonetta',	'63',	5,	195,	0, 3),
('Inkling',	'inkling',	'64',	12634,	88438,	29, 5),
('Ridley',	'ridley',	'65',	125,	4875,	0, 6),
('Simon',	'simon',	'66',	150,	5850,	4, 7),
('Richter',	'richter',	'66e',	65,	2535,	0, 3),
('King K Rool',	'kingKRool',	'67',	21,	819,	2, 5),
('Isabelle',	'isabelle',	'68',	50,	1900,	2, 6),
('Incineroar',	'incineroar',	'69',	2,	76,	0, 6),
('Piranha Plant',	'piranhaPlant',	'70',	325,	12350,	13, 6),
('Joker',	'joker',	'71',	2,	76,	1, 6),
('Hero',	'hero',	'72',	13,	494,	5, 5),
('Banjo & Kazooie',	'banjoAndKazooie',	'73',	15,	570,	5, 5),
('Terry',	'terry',	'74',	1,	38,	0, 5),
('Byleth',	'byleth',	'75',	2106,	14742,	8, 3),
('Min Min',	'minMin',	'76',	1053,	40014,	8, 6),
('Steve',	'steve',	'77',	250,	9500,	3, 1),
('Sephiroth',	'sephiroth',	'78',	1,	38,	0, 1),
('Pyra and Mythra',	'pyraAndMythra',	'79',	55,	275,	0, 1),
('Kazuya',	'kazuya',	'80',	1,	38,	0, 1),
('Sora',	'sora',	'81',	2,	76,	0, 1);

INSERT INTO fighter_details
(player_id, fighter_id, pool_size)
VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 1),
(1, 7, 1),
(1, 8, 1),
(1, 9, 1),
(1, 10, 1),
(1, 11, 1),
(1, 12, 1),
(1, 13, 1),
(1, 14, 1),
(1, 15, 1),
(1, 16, 1),
(1, 17, 1),
(1, 18, 1),
(1, 19, 1),
(1, 20, 1),
(1, 21, 1),
(1, 22, 1),
(1, 23, 1),
(1, 24, 1),
(1, 25, 1),
(1, 26, 1),
(1, 27, 1),
(1, 28, 1),
(1, 29, 1),
(1, 30, 1),
(1, 31, 1),
(1, 32, 1),
(1, 33, 1),
(1, 34, 1),
(1, 35, 1),
(1, 36, 1),
(1, 37, 1),
(1, 38, 1),
(1, 39, 1),
(1, 40, 1),
(1, 41, 1),
(1, 42, 1),
(1, 43, 1),
(1, 44, 1),
(1, 45, 1),
(1, 46, 1),
(1, 47, 1),
(1, 48, 1),
(1, 49, 1),
(1, 50, 1),
(1, 51, 1),
(1, 52, 1),
(1, 53, 1),
(1, 54, 1),
(1, 55, 1),
(1, 56, 1),
(1, 57, 1),
(1, 58, 1),
(1, 59, 1),
(1, 60, 1),
(1, 61, 1),
(1, 62, 1),
(1, 63, 1),
(1, 64, 1),
(1, 65, 1),
(1, 66, 1),
(1, 67, 1),
(1, 68, 1),
(1, 69, 1),
(1, 70, 1),
(1, 71, 1),
(1, 72, 1),
(1, 73, 1),
(1, 74, 1),
(1, 75, 1),
(1, 76, 1),
(1, 77, 1),
(1, 78, 1),
(1, 79, 1),
(1, 80, 1),
(1, 81, 1),
(1, 82, 1),
(1, 83, 1),
(1, 84, 1),
(1, 85, 1),
(1, 86, 1),
(2, 1, 1),
(2, 2, 1),
(2, 3, 1),
(2, 4, 1),
(2, 5, 1),
(2, 6, 1),
(2, 7, 1),
(2, 8, 1),
(2, 9, 1),
(2, 10, 1),
(2, 11, 1),
(2, 12, 1),
(2, 13, 1),
(2, 14, 1),
(2, 15, 1),
(2, 16, 1),
(2, 17, 1),
(2, 18, 1),
(2, 19, 1),
(2, 20, 1),
(2, 21, 1),
(2, 22, 1),
(2, 23, 1),
(2, 24, 1),
(2, 25, 1),
(2, 26, 1),
(2, 27, 1),
(2, 28, 1),
(2, 29, 1),
(2, 30, 1),
(2, 31, 1),
(2, 32, 1),
(2, 33, 1),
(2, 34, 1),
(2, 35, 1),
(2, 36, 1),
(2, 37, 1),
(2, 38, 1),
(2, 39, 1),
(2, 40, 1),
(2, 41, 1),
(2, 42, 1),
(2, 43, 1),
(2, 44, 1),
(2, 45, 1),
(2, 46, 1),
(2, 47, 1),
(2, 48, 1),
(2, 49, 1),
(2, 50, 1),
(2, 51, 1),
(2, 52, 1),
(2, 53, 1),
(2, 54, 1),
(2, 55, 1),
(2, 56, 1),
(2, 57, 1),
(2, 58, 1),
(2, 59, 1),
(2, 60, 1),
(2, 61, 1),
(2, 62, 1),
(2, 63, 1),
(2, 64, 1),
(2, 65, 1),
(2, 66, 1),
(2, 67, 1),
(2, 68, 1),
(2, 69, 1),
(2, 70, 1),
(2, 71, 1),
(2, 72, 1),
(2, 73, 1),
(2, 74, 1),
(2, 75, 1),
(2, 76, 1),
(2, 77, 1),
(2, 78, 1),
(2, 79, 1),
(2, 80, 1),
(2, 81, 1),
(2, 82, 1),
(2, 83, 1),
(2, 84, 1),
(2, 85, 1),
(2, 86, 1),
(1, 1, 3),
(1, 2, 3),
(1, 3, 3),
(1, 4, 3),
(1, 5, 3),
(1, 6, 3),
(1, 7, 3),
(1, 8, 3),
(1, 9, 3),
(1, 10, 3),
(1, 11, 3),
(1, 12, 3),
(1, 13, 3),
(1, 14, 3),
(1, 15, 3),
(1, 16, 3),
(1, 17, 3),
(1, 18, 3),
(1, 19, 3),
(1, 20, 3),
(1, 21, 3),
(1, 22, 3),
(1, 23, 3),
(1, 24, 3),
(1, 25, 3),
(1, 26, 3),
(1, 27, 3),
(1, 28, 3),
(1, 29, 3),
(1, 30, 3),
(1, 31, 3),
(1, 32, 3),
(1, 33, 3),
(1, 34, 3),
(1, 35, 3),
(1, 36, 3),
(1, 37, 3),
(1, 38, 3),
(1, 39, 3),
(1, 40, 3),
(1, 41, 3),
(1, 42, 3),
(1, 43, 3),
(1, 44, 3),
(1, 45, 3),
(1, 46, 3),
(1, 47, 3),
(1, 48, 3),
(1, 49, 3),
(1, 50, 3),
(1, 51, 3),
(1, 52, 3),
(1, 53, 3),
(1, 54, 3),
(1, 55, 3),
(1, 56, 3),
(1, 57, 3),
(1, 58, 3),
(1, 59, 3),
(1, 60, 3),
(1, 61, 3),
(1, 62, 3),
(1, 63, 3),
(1, 64, 3),
(1, 65, 3),
(1, 66, 3),
(1, 67, 3),
(1, 68, 3),
(1, 69, 3),
(1, 70, 3),
(1, 71, 3),
(1, 72, 3),
(1, 73, 3),
(1, 74, 3),
(1, 75, 3),
(1, 76, 3),
(1, 77, 3),
(1, 78, 3),
(1, 79, 3),
(1, 80, 3),
(1, 81, 3),
(1, 82, 3),
(1, 83, 3),
(1, 84, 3),
(1, 85, 3),
(1, 86, 3),
(2, 1, 3),
(2, 2, 3),
(2, 3, 3),
(2, 4, 3),
(2, 5, 3),
(2, 6, 3),
(2, 7, 3),
(2, 8, 3),
(2, 9, 3),
(2, 10, 3),
(2, 11, 3),
(2, 12, 3),
(2, 13, 3),
(2, 14, 3),
(2, 15, 3),
(2, 16, 3),
(2, 17, 3),
(2, 18, 3),
(2, 19, 3),
(2, 20, 3),
(2, 21, 3),
(2, 22, 3),
(2, 23, 3),
(2, 24, 3),
(2, 25, 3),
(2, 26, 3),
(2, 27, 3),
(2, 28, 3),
(2, 29, 3),
(2, 30, 3),
(2, 31, 3),
(2, 32, 3),
(2, 33, 3),
(2, 34, 3),
(2, 35, 3),
(2, 36, 3),
(2, 37, 3),
(2, 38, 3),
(2, 39, 3),
(2, 40, 3),
(2, 41, 3),
(2, 42, 3),
(2, 43, 3),
(2, 44, 3),
(2, 45, 3),
(2, 46, 3),
(2, 47, 3),
(2, 48, 3),
(2, 49, 3),
(2, 50, 3),
(2, 51, 3),
(2, 52, 3),
(2, 53, 3),
(2, 54, 3),
(2, 55, 3),
(2, 56, 3),
(2, 57, 3),
(2, 58, 3),
(2, 59, 3),
(2, 60, 3),
(2, 61, 3),
(2, 62, 3),
(2, 63, 3),
(2, 64, 3),
(2, 65, 3),
(2, 66, 3),
(2, 67, 3),
(2, 68, 3),
(2, 69, 3),
(2, 70, 3),
(2, 71, 3),
(2, 72, 3),
(2, 73, 3),
(2, 74, 3),
(2, 75, 3),
(2, 76, 3),
(2, 77, 3),
(2, 78, 3),
(2, 79, 3),
(2, 80, 3),
(2, 81, 3),
(2, 82, 3),
(2, 83, 3),
(2, 84, 3),
(2, 85, 3),
(2, 86, 3),
(1, 1, 5),
(1, 2, 5),
(1, 3, 5),
(1, 4, 5),
(1, 5, 5),
(1, 6, 5),
(1, 7, 5),
(1, 8, 5),
(1, 9, 5),
(1, 10, 5),
(1, 11, 5),
(1, 12, 5),
(1, 13, 5),
(1, 14, 5),
(1, 15, 5),
(1, 16, 5),
(1, 17, 5),
(1, 18, 5),
(1, 19, 5),
(1, 20, 5),
(1, 21, 5),
(1, 22, 5),
(1, 23, 5),
(1, 24, 5),
(1, 25, 5),
(1, 26, 5),
(1, 27, 5),
(1, 28, 5),
(1, 29, 5),
(1, 30, 5),
(1, 31, 5),
(1, 32, 5),
(1, 33, 5),
(1, 34, 5),
(1, 35, 5),
(1, 36, 5),
(1, 37, 5),
(1, 38, 5),
(1, 39, 5),
(1, 40, 5),
(1, 41, 5),
(1, 42, 5),
(1, 43, 5),
(1, 44, 5),
(1, 45, 5),
(1, 46, 5),
(1, 47, 5),
(1, 48, 5),
(1, 49, 5),
(1, 50, 5),
(1, 51, 5),
(1, 52, 5),
(1, 53, 5),
(1, 54, 5),
(1, 55, 5),
(1, 56, 5),
(1, 57, 5),
(1, 58, 5),
(1, 59, 5),
(1, 60, 5),
(1, 61, 5),
(1, 62, 5),
(1, 63, 5),
(1, 64, 5),
(1, 65, 5),
(1, 66, 5),
(1, 67, 5),
(1, 68, 5),
(1, 69, 5),
(1, 70, 5),
(1, 71, 5),
(1, 72, 5),
(1, 73, 5),
(1, 74, 5),
(1, 75, 5),
(1, 76, 5),
(1, 77, 5),
(1, 78, 5),
(1, 79, 5),
(1, 80, 5),
(1, 81, 5),
(1, 82, 5),
(1, 83, 5),
(1, 84, 5),
(1, 85, 5),
(1, 86, 5),
(2, 1, 5),
(2, 2, 5),
(2, 3, 5),
(2, 4, 5),
(2, 5, 5),
(2, 6, 5),
(2, 7, 5),
(2, 8, 5),
(2, 9, 5),
(2, 10, 5),
(2, 11, 5),
(2, 12, 5),
(2, 13, 5),
(2, 14, 5),
(2, 15, 5),
(2, 16, 5),
(2, 17, 5),
(2, 18, 5),
(2, 19, 5),
(2, 20, 5),
(2, 21, 5),
(2, 22, 5),
(2, 23, 5),
(2, 24, 5),
(2, 25, 5),
(2, 26, 5),
(2, 27, 5),
(2, 28, 5),
(2, 29, 5),
(2, 30, 5),
(2, 31, 5),
(2, 32, 5),
(2, 33, 5),
(2, 34, 5),
(2, 35, 5),
(2, 36, 5),
(2, 37, 5),
(2, 38, 5),
(2, 39, 5),
(2, 40, 5),
(2, 41, 5),
(2, 42, 5),
(2, 43, 5),
(2, 44, 5),
(2, 45, 5),
(2, 46, 5),
(2, 47, 5),
(2, 48, 5),
(2, 49, 5),
(2, 50, 5),
(2, 51, 5),
(2, 52, 5),
(2, 53, 5),
(2, 54, 5),
(2, 55, 5),
(2, 56, 5),
(2, 57, 5),
(2, 58, 5),
(2, 59, 5),
(2, 60, 5),
(2, 61, 5),
(2, 62, 5),
(2, 63, 5),
(2, 64, 5),
(2, 65, 5),
(2, 66, 5),
(2, 67, 5),
(2, 68, 5),
(2, 69, 5),
(2, 70, 5),
(2, 71, 5),
(2, 72, 5),
(2, 73, 5),
(2, 74, 5),
(2, 75, 5),
(2, 76, 5),
(2, 77, 5),
(2, 78, 5),
(2, 79, 5),
(2, 80, 5),
(2, 81, 5),
(2, 82, 5),
(2, 83, 5),
(2, 84, 5),
(2, 85, 5),
(2, 86, 5);

INSERT INTO fighter_favor ( player_id, fighter_id )
VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(1, 32),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(1, 37),
(1, 38),
(1, 39),
(1, 40),
(1, 41),
(1, 42),
(1, 43),
(1, 44),
(1, 45),
(1, 46),
(1, 47),
(1, 48),
(1, 49),
(1, 50),
(1, 51),
(1, 52),
(1, 53),
(1, 54),
(1, 55),
(1, 56),
(1, 57),
(1, 58),
(1, 59),
(1, 60),
(1, 61),
(1, 62),
(1, 63),
(1, 64),
(1, 65),
(1, 66),
(1, 67),
(1, 68),
(1, 69),
(1, 70),
(1, 71),
(1, 72),
(1, 73),
(1, 74),
(1, 75),
(1, 76),
(1, 77),
(1, 78),
(1, 79),
(1, 80),
(1, 81),
(1, 82),
(1, 83),
(1, 84),
(1, 85),
(1, 86),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 22),
(2, 23),
(2, 24),
(2, 25),
(2, 26),
(2, 27),
(2, 28),
(2, 29),
(2, 30),
(2, 31),
(2, 32),
(2, 33),
(2, 34),
(2, 35),
(2, 36),
(2, 37),
(2, 38),
(2, 39),
(2, 40),
(2, 41),
(2, 42),
(2, 43),
(2, 44),
(2, 45),
(2, 46),
(2, 47),
(2, 48),
(2, 49),
(2, 50),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(2, 56),
(2, 57),
(2, 58),
(2, 59),
(2, 60),
(2, 61),
(2, 62),
(2, 63),
(2, 64),
(2, 65),
(2, 66),
(2, 67),
(2, 68),
(2, 69),
(2, 70),
(2, 71),
(2, 72),
(2, 73),
(2, 74),
(2, 75),
(2, 76),
(2, 77),
(2, 78),
(2, 79),
(2, 80),
(2, 81),
(2, 82),
(2, 83),
(2, 84),
(2, 85),
(2, 86);