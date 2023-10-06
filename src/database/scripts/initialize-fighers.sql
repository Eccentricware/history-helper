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
