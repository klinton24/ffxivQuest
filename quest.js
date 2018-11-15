/*628 Quests in Array*/
const quests = [
  {
    questName: "Close to Home",
    questNumber: 1,
    questLevel: 1,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "On to Summerford",
    questNumber: 2,
    questLevel: 4,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Dressed to Call",
    questNumber: 3,
    questLevel: 5,
    questGiver: "Staelwyrn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Lurkers in the Grotto",
    questNumber: 4,
    questLevel: 5,
    questGiver: "Staelwyrn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Further Afield",
    questNumber: 5,
    questLevel: 6,
    questGiver: "Gurcant",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Washed Up",
    questNumber: 6,
    questLevel: 7,
    questGiver: "Staelwyrn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Double Dealing",
    questNumber: 7,
    questLevel: 8,
    questGiver: "Staelwyrn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Loam Maintenance",
    questNumber: 8,
    questLevel: 9,
    questGiver: "Gurcant",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Plowshares to Swords",
    questNumber: 9,
    questLevel: 9,
    questGiver: "Pfrewahl",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Just Deserts",
    questNumber: 10,
    questLevel: 9,
    questGiver: "Staelwyrn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sky-high",
    questNumber: 11,
    questLevel: 10,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Courier for a Day",
    questNumber: 12,
    questLevel: 10,
    questGiver: "Wyrkrhit",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Thanks a Million",
    questNumber: 13,
    questLevel: 11,
    questGiver: "Wyrkrhit",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Relighting the Torch",
    questNumber: 14,
    questLevel: 11,
    questGiver: "Fraeloef",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Farmer of Fortune",
    questNumber: 15,
    questLevel: 11,
    questGiver: "Lyulf",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "On to the Drydocks",
    questNumber: 16,
    questLevel: 11,
    questGiver: "H'naanza",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Without a Doubt",
    questNumber: 17,
    questLevel: 12,
    questGiver: "Ahtbyrm",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Righting the Shipwright",
    questNumber: 18,
    questLevel: 12,
    questGiver: "Haldbroda",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Do Angry Pirates Dream",
    questNumber: 19,
    questLevel: 13,
    questGiver: "Ahtbyrm",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Victory in Peril",
    questNumber: 20,
    questLevel: 14,
    questGiver: "Ghimthota",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Men of the Blue Tattoos",
    questNumber: 21,
    questLevel: 14,
    questGiver: "Ghimthota",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Feint and Strike",
    questNumber: 22,
    questLevel: 14,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "High Society",
    questNumber: 23,
    questLevel: 14,
    questGiver: "Reyner",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Mizzenmast Repast",
    questNumber: 24,
    questLevel: 14,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Lominsan Envoy",
    questNumber: 25,
    questLevel: 15,
    questGiver: "Merlwyb Bloefhiswyn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Call of the Sea",
    questNumber: 26,
    questLevel: 15,
    questGiver: "Bartholomew",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "It's Probably Pirates",
    questNumber: 27,
    questLevel: 15,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Call of the Forest",
    questNumber: 28,
    questLevel: 15,
    questGiver: "Baderon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Fire in the Gloom",
    questNumber: 29,
    questLevel: 16,
    questGiver: "Mother Miounne",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Call of the Desert",
    questNumber: 30,
    questLevel: 16,
    questGiver: "Mother Miounne",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Into a Copper Hell",
    questNumber: 31,
    questLevel: 17,
    questGiver: "Momodi",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Scions of the Seventh Dawn (Quest)",
    questNumber: 32,
    questLevel: 17,
    questGiver: "Momodi",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Wild Rose by Any Other Name",
    questNumber: 33,
    questLevel: 17,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Unsolved Mystery",
    questNumber: 34,
    questLevel: 17,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "What Poor People Think",
    questNumber: 35,
    questLevel: 18,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Proper Burial",
    questNumber: 36,
    questLevel: 18,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "For the Children",
    questNumber: 37,
    questLevel: 19,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Amalj'aa Wrong Places",
    questNumber: 38,
    questLevel: 19,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Dressed to Deceive",
    questNumber: 39,
    questLevel: 19,
    questGiver: "Isembard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Life, Materia and Everything",
    questNumber: 40,
    questLevel: 19,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Lord of the Inferno",
    questNumber: 41,
    questLevel: 20,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Hero in the Making",
    questNumber: 42,
    questLevel: 20,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Company You Keep (Maelstrom)",
    questNumber: 43,
    questLevel: 20,
    questGiver: "Storm Officer",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Till Sea Swallows All",
    questNumber: 44,
    questLevel: 20,
    questGiver: "Storm Personnel Officer",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sylph-management",
    questNumber: 45,
    questLevel: 20,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "We Come in Peace",
    questNumber: 46,
    questLevel: 20,
    questGiver: "Vorsaile Heuloix",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sylphic Studies",
    questNumber: 47,
    questLevel: 20,
    questGiver: "Rolfe Hawthorne",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "First Impressions",
    questNumber: 48,
    questLevel: 20,
    questGiver: "Rolfe Hawthorne",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "First Contact",
    questNumber: 49,
    questLevel: 21,
    questGiver: "Rolfe Hawthorne",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Dance Dance Diplomacy",
    questNumber: 50,
    questLevel: 21,
    questGiver: "Yda",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Forest Friend",
    questNumber: 51,
    questLevel: 21,
    questGiver: "Papalymo",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Presence of the Enemy",
    questNumber: 52,
    questLevel: 21,
    questGiver: "Komuxio",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Brotherly Love",
    questNumber: 53,
    questLevel: 22,
    questGiver: "Komuxio",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Spirited Away",
    questNumber: 54,
    questLevel: 22,
    questGiver: "Komuxio",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Druthers House Rules",
    questNumber: 55,
    questLevel: 22,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Never Forget",
    questNumber: 56,
    questLevel: 23,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Microbrewing",
    questNumber: 57,
    questLevel: 23,
    questGiver: "Teteroon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Like Fine Wine",
    questNumber: 58,
    questLevel: 23,
    questGiver: "Teteroon",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sylphish Concerns",
    questNumber: 59,
    questLevel: 23,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Nouveau Riche",
    questNumber: 60,
    questLevel: 23,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Into the Beast's Maw",
    questNumber: 61,
    questLevel: 24,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Simple Gift",
    questNumber: 62,
    questLevel: 24,
    questGiver: "Buscarron",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Believe in Your Sylph",
    questNumber: 63,
    questLevel: 24,
    questGiver: "Komuxio",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Back from the Wood",
    questNumber: 64,
    questLevel: 24,
    questGiver: "Vorsaile Heuloix",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Shadow of Darkness",
    questNumber: 65,
    questLevel: 24,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Highbridge Times",
    questNumber: 66,
    questLevel: 24,
    questGiver: "Hihibaru",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Ratting It Out",
    questNumber: 67,
    questLevel: 24,
    questGiver: "Hihibaru",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Where There Is Smoke",
    questNumber: 68,
    questLevel: 25,
    questGiver: "Hihibaru",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "On to Little Ala Mhigo",
    questNumber: 69,
    questLevel: 25,
    questGiver: "Hihibaru",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Tea for Three",
    questNumber: 70,
    questLevel: 25,
    questGiver: "Gisilbehrt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Foot in the Door",
    questNumber: 71,
    questLevel: 25,
    questGiver: "Gisilbehrt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Meeting with the Resistance",
    questNumber: 72,
    questLevel: 26,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Killing Him Softly",
    questNumber: 73,
    questLevel: 26,
    questGiver: "Meffrid",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Helping Horn",
    questNumber: 74,
    questLevel: 26,
    questGiver: "Meffrid",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "He Ain't Heavy",
    questNumber: 75,
    questLevel: 27,
    questGiver: "Meffrid",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Come Highly Recommended",
    questNumber: 76,
    questLevel: 27,
    questGiver: "Meffrid",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Bear and the Young'uns' Cares",
    questNumber: 77,
    questLevel: 27,
    questGiver: "Gundobald",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Wilred Wants You",
    questNumber: 78,
    questLevel: 27,
    questGiver: "Hremfing",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Big Trouble in Little Ala Mhigo",
    questNumber: 79,
    questLevel: 27,
    questGiver: "Gundobald",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Back to Square One",
    questNumber: 80,
    questLevel: 27,
    questGiver: "Gundobald",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Terror at Fallgourd",
    questNumber: 81,
    questLevel: 27,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Ziz Is So Ridiculous",
    questNumber: 82,
    questLevel: 28,
    questGiver: "Aideen",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Seeing Eye to Winged Eye",
    questNumber: 83,
    questLevel: 28,
    questGiver: "Ivaurault",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Rock of Rancor",
    questNumber: 84,
    questLevel: 28,
    questGiver: "Aideen",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Power of Deduction",
    questNumber: 85,
    questLevel: 28,
    questGiver: "Medrod",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Secret of the White Lily",
    questNumber: 86,
    questLevel: 28,
    questGiver: "Aethelmaer",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Skeletons in Her Closet",
    questNumber: 87,
    questLevel: 28,
    questGiver: "Ursandel",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Wrath of the Titan",
    questNumber: 88,
    questLevel: 30,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Tales from the Tidus Slayer",
    questNumber: 89,
    questLevel: 30,
    questGiver: "Trachtoum",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Hungry Hungry Goobbues",
    questNumber: 90,
    questLevel: 30,
    questGiver: "Trachtoum",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Lominsan Way",
    questNumber: 91,
    questLevel: 30,
    questGiver: "Trachtoum",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Nix That",
    questNumber: 92,
    questLevel: 30,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Modest Proposal",
    questNumber: 93,
    questLevel: 30,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Penitent Man",
    questNumber: 94,
    questLevel: 30,
    questGiver: "Landenel",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Changing of the Guard",
    questNumber: 95,
    questLevel: 30,
    questGiver: "Landenel",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Trial by Turtle",
    questNumber: 96,
    questLevel: 30,
    questGiver: "Landenel",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Drake Exception",
    questNumber: 97,
    questLevel: 31,
    questGiver: "U'odh Nunh",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Perfect Prey",
    questNumber: 98,
    questLevel: 31,
    questGiver: "U'odh Nunh",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "When the Worm Turns",
    questNumber: 99,
    questLevel: 31,
    questGiver: "U'odh Nunh",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "There and Back Again",
    questNumber: 100,
    questLevel: 31,
    questGiver: "U'odh Nunh",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Things We Do for Cheese",
    questNumber: 101,
    questLevel: 32,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "What Do You Mean You Forgot the Wine",
    questNumber: 102,
    questLevel: 32,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "An Offer You Can Refuse",
    questNumber: 103,
    questLevel: 32,
    questGiver: "Shamani Lohmani",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "It Won't Work",
    questNumber: 104,
    questLevel: 32,
    questGiver: "Shamani Lohmani",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Give a Man a Drink",
    questNumber: 105,
    questLevel: 33,
    questGiver: "Shamani Lohmani",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "That Weight",
    questNumber: 106,
    questLevel: 33,
    questGiver: "Drest",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Not My War",
    questNumber: 107,
    questLevel: 33,
    questGiver: "Drest",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Battle Scars",
    questNumber: 108,
    questLevel: 33,
    questGiver: "Drest",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "It Was a Very Good Year",
    questNumber: 109,
    questLevel: 33,
    questGiver: "Shamani Lohmani",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Final Ignominy",
    questNumber: 110,
    questLevel: 33,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "In the Company of Heroes",
    questNumber: 111,
    questLevel: 33,
    questGiver: "Y'shtola",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "As You Wish",
    questNumber: 112,
    questLevel: 33,
    questGiver: "Wheiskaet",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Lord of Crags",
    questNumber: 113,
    questLevel: 34,
    questGiver: "Riol",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "All Good Things",
    questNumber: 114,
    questLevel: 34,
    questGiver: "Y'shtola",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "With a Little Elbow Grease",
    questNumber: 115,
    questLevel: 35,
    questGiver: "Eaduuard",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "You Can't Take It with You",
    questNumber: 116,
    questLevel: 35,
    questGiver: "Marques",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Tall Drink of Aqua del Sol",
    questNumber: 117,
    questLevel: 35,
    questGiver: "Ilcum",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Bringing out the Dead",
    questNumber: 118,
    questLevel: 35,
    questGiver: "Eluned",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Warden Works in Mysterious Ways",
    questNumber: 119,
    questLevel: 35,
    questGiver: "Eluned",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Bury Me Not on the Lone Prairie",
    questNumber: 120,
    questLevel: 35,
    questGiver: "Eluned",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Eyes on Me",
    questNumber: 121,
    questLevel: 35,
    questGiver: "Marques",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "He Who Waited Behind",
    questNumber: 122,
    questLevel: 36,
    questGiver: "Iliud",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Cold Reception",
    questNumber: 123,
    questLevel: 36,
    questGiver: "Vortefaurt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Unending War",
    questNumber: 124,
    questLevel: 36,
    questGiver: "Ludovoix",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Men of Honor",
    questNumber: 125,
    questLevel: 36,
    questGiver: "Jocea",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Three for Three",
    questNumber: 126,
    questLevel: 36,
    questGiver: "Portelaine",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Rose and the Unicorn",
    questNumber: 127,
    questLevel: 36,
    questGiver: "Carrilaut",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Feats of Strength",
    questNumber: 128,
    questLevel: 37,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Talk of Coerthas",
    questNumber: 129,
    questLevel: 37,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Road to Redemption",
    questNumber: 130,
    questLevel: 38,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Following the Evidence",
    questNumber: 131,
    questLevel: 38,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "In the Eyes of Gods and Men",
    questNumber: 132,
    questLevel: 38,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Final Flight of the Enterprise",
    questNumber: 133,
    questLevel: 38,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Ye of Little Faith",
    questNumber: 134,
    questLevel: 39,
    questGiver: "Brunadier",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "All By Ourselves",
    questNumber: 135,
    questLevel: 39,
    questGiver: "Nivie",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Factual Folklore",
    questNumber: 136,
    questLevel: 39,
    questGiver: "Haustefort",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Opportunity Knocks",
    questNumber: 137,
    questLevel: 39,
    questGiver: "Benedict",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Best Inventions",
    questNumber: 138,
    questLevel: 39,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Influencing Inquisitors",
    questNumber: 139,
    questLevel: 40,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "By the Lights of Ishgard",
    questNumber: 140,
    questLevel: 40,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Blood for Blood",
    questNumber: 141,
    questLevel: 40,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Heretic among Us",
    questNumber: 142,
    questLevel: 40,
    questGiver: "Drillemont",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "In Pursuit of the Past",
    questNumber: 143,
    questLevel: 41,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Into the Eye of the Storm",
    questNumber: 144,
    questLevel: 41,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "All Due Precautions",
    questNumber: 145,
    questLevel: 41,
    questGiver: "Lamberteint",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sealed with Science",
    questNumber: 146,
    questLevel: 41,
    questGiver: "Lamberteint",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "With the Utmost Care",
    questNumber: 147,
    questLevel: 41,
    questGiver: "Hahasako",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Promising Prospect",
    questNumber: 148,
    questLevel: 41,
    questGiver: "Lamberteint",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "It's Probably Not Pirates",
    questNumber: 149,
    questLevel: 42,
    questGiver: "Ceana",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Representing the Representative",
    questNumber: 150,
    questLevel: 42,
    questGiver: "Ceana",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Reluctant Researcher",
    questNumber: 151,
    questLevel: 42,
    questGiver: "Ceana",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Sweet Somethings",
    questNumber: 152,
    questLevel: 42,
    questGiver: "Davyd",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "History Repeating",
    questNumber: 153,
    questLevel: 42,
    questGiver: "Davyd",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Curious Case of Giggity",
    questNumber: 154,
    questLevel: 43,
    questGiver: "Ceana",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Of Sylphs and Spriggans",
    questNumber: 155,
    questLevel: 43,
    questGiver: "Komuxio",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Crazy Enough to Work",
    questNumber: 156,
    questLevel: 43,
    questGiver: "Maerwynn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Better Late than Never",
    questNumber: 157,
    questLevel: 43,
    questGiver: "Hedyn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Lady of the Vortex",
    questNumber: 158,
    questLevel: 44,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Reclamation",
    questNumber: 159,
    questLevel: 44,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Casing the Castrum",
    questNumber: 160,
    questLevel: 44,
    questGiver: "Y'shtola",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Eyes on the Empire",
    questNumber: 161,
    questLevel: 44,
    questGiver: "Portelaine",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Footprints in the Snow",
    questNumber: 162,
    questLevel: 44,
    questGiver: "Pierremons",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Monumental Hopes",
    questNumber: 163,
    questLevel: 44,
    questGiver: "Wedge",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Notorious Biggs",
    questNumber: 164,
    questLevel: 44,
    questGiver: "Wedge",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Come-Into-My-Castrum",
    questNumber: 165,
    questLevel: 44,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Getting Even with Garlemald",
    questNumber: 166,
    questLevel: 44,
    questGiver: "Glaumunt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Drowning Out the Voices",
    questNumber: 167,
    questLevel: 45,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Acting the Part",
    questNumber: 168,
    questLevel: 45,
    questGiver: "Glaumunt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Dressed for Conquest",
    questNumber: 169,
    questLevel: 46,
    questGiver: "Sark Malark",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Fool Me Twice",
    questNumber: 170,
    questLevel: 46,
    questGiver: "Glaumunt",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Every Little Thing She Does Is Magitek",
    questNumber: 171,
    questLevel: 46,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Escape from Castrum Centri",
    questNumber: 172,
    questLevel: 46,
    questGiver: "Cid Garlond",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Black Wolf's Ultimatum",
    questNumber: 173,
    questLevel: 46,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Operation Archon",
    questNumber: 174,
    questLevel: 49,
    questGiver: "Minfilia",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "A Hero in Need",
    questNumber: 175,
    questLevel: 49,
    questGiver: "Allied Communications Officer",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Ladle in the Darkness",
    questNumber: 176,
    questLevel: 49,
    questGiver: "Cracked Fist",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "All upon the Watchtowers",
    questNumber: 177,
    questLevel: 49,
    questGiver: "Cracked Fist",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Hearts on Fire",
    questNumber: 178,
    questLevel: 49,
    questGiver: "Edelstein",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Setting the Stage",
    questNumber: 179,
    questLevel: 49,
    questGiver: "Edelstein",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "Rock the Castrum",
    questNumber: 180,
    questLevel: 50,
    questGiver: "Raubahn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Ultimate Weapon",
    questNumber: 181,
    questLevel: 50,
    questGiver: "Raubahn",
    patch: "Patch 2.0 (A Realm Reborn)"
  },
  {
    questName: "The Price of Principles",
    questNumber: 182,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Moving On",
    questNumber: 183,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Flowers for One",
    questNumber: 184,
    questLevel: 50,
    questGiver: "Iliud",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "All Things in Time",
    questNumber: 185,
    questLevel: 50,
    questGiver: "F'lhaminn",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "The Resolute",
    questNumber: 186,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Laying the Foundation",
    questNumber: 187,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Rock-solid Protection",
    questNumber: 188,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Crate Go Kaboom",
    questNumber: 189,
    questLevel: 50,
    questGiver: "Sark Malark",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Better Late than Sever",
    questNumber: 190,
    questLevel: 50,
    questGiver: "Guolgeim",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Welcome to Morbol Country",
    questNumber: 191,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Answering the Call",
    questNumber: 192,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "You're Gonna Carry That",
    questNumber: 193,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "The Things We Do for Tea",
    questNumber: 194,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "It's Possibly a Primal",
    questNumber: 195,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Hail to the King, Kupo",
    questNumber: 196,
    questLevel: 50,
    questGiver: "Vorsaile Heuloix",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "You Have Selected Regicide",
    questNumber: 197,
    questLevel: 50,
    questGiver: "E-Sumi-Yan",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "On the Properties of Primals",
    questNumber: 198,
    questLevel: 50,
    questGiver: "Raya-O-Senna",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "The Gifted",
    questNumber: 199,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Build on the Stone",
    questNumber: 200,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.1 (A Realm Awoken)"
  },
  {
    questName: "Still Waters",
    questNumber: 201,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "A Final Temptation",
    questNumber: 202,
    questLevel: 50,
    questGiver: "Thancred",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "The Mother of Exiles",
    questNumber: 203,
    questLevel: 50,
    questGiver: "Thancred",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Promises to Keep",
    questNumber: 204,
    questLevel: 50,
    questGiver: "Raubahn",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "A Small-scale Operation",
    questNumber: 205,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Yugiri's Game",
    questNumber: 206,
    questLevel: 50,
    questGiver: "Hozan",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "If Wishes Were Horsebirds",
    questNumber: 207,
    questLevel: 50,
    questGiver: "Hozan",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Why We Adventure",
    questNumber: 208,
    questLevel: 50,
    questGiver: "Hozan",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "All Due Respect",
    questNumber: 209,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Full Belly, Happy Heart",
    questNumber: 210,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Writhing in the Dark",
    questNumber: 211,
    questLevel: 50,
    questGiver: "Adventurers' Guild Assistant",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "The Sea Rises",
    questNumber: 212,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Fireworks and Fish Don't Mix",
    questNumber: 213,
    questLevel: 50,
    questGiver: "Falkbryda",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Scouts in Distress",
    questNumber: 214,
    questLevel: 50,
    questGiver: "Falkbryda",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "The Gift of Eternity",
    questNumber: 215,
    questLevel: 50,
    questGiver: "Falkbryda",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Into the Heart of the Whorl",
    questNumber: 216,
    questLevel: 50,
    questGiver: "Merlwyb Bloefhiswyn",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Lord of the Whorl",
    questNumber: 217,
    questLevel: 50,
    questGiver: "Eynzahr Slafyrsyn",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "When Yugiri Met the Fraternity",
    questNumber: 218,
    questLevel: 50,
    questGiver: "Zanthael",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "Through the Maelstrom",
    questNumber: 219,
    questLevel: 50,
    questGiver: "Yugiri",
    patch: "Patch 2.2 (Through the Maelstrom)"
  },
  {
    questName: "The Great Divide",
    questNumber: 220,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Desperate Times",
    questNumber: 221,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Shock and Awe",
    questNumber: 222,
    questLevel: 50,
    questGiver: "Terrified Refugee",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Reap the Whirlwind",
    questNumber: 223,
    questLevel: 50,
    questGiver: "Swift Ryder",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Revolution",
    questNumber: 224,
    questLevel: 50,
    questGiver: "Swift Ryder",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Stories We Tell",
    questNumber: 225,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Lord of Levin",
    questNumber: 226,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "A Sylphlands Sting",
    questNumber: 227,
    questLevel: 50,
    questGiver: "Serpent Lieutenant",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Scattered Scions",
    questNumber: 228,
    questLevel: 50,
    questGiver: "Teary-eyed Private",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "True to Form",
    questNumber: 229,
    questLevel: 50,
    questGiver: "Yda",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Levin an Impression",
    questNumber: 230,
    questLevel: 50,
    questGiver: "Papalymo",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "What Little Gods Are Made Of",
    questNumber: 231,
    questLevel: 50,
    questGiver: "Serpent Lieutenant",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "A Hard Hapalit to Break",
    questNumber: 232,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Picking Up the Sledge",
    questNumber: 233,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Guardian of Eorzea",
    questNumber: 234,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Recruiting the Realm",
    questNumber: 235,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Heretical Harassment",
    questNumber: 236,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "When the Cold Sets In",
    questNumber: 237,
    questLevel: 50,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Brave New Companions",
    questNumber: 238,
    questLevel: 50,
    questGiver: "Slafborn",
    patch: "Patch 2.3 (Defenders of Eorzea)"
  },
  {
    questName: "Traitor in the Midst",
    questNumber: 239,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Back and Fourth",
    questNumber: 240,
    questLevel: 50,
    questGiver: "Ilberd",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Coming to Terms",
    questNumber: 241,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "The Intercession of Saints",
    questNumber: 242,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Strength in Unity",
    questNumber: 243,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Dark Words, Dark Deeds",
    questNumber: 244,
    questLevel: 50,
    questGiver: "Drillemont",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "First Blood",
    questNumber: 245,
    questLevel: 50,
    questGiver: "Drillemont",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "The Path of the Righteous",
    questNumber: 246,
    questLevel: 50,
    questGiver: "Drillemont",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "For the Greater Good",
    questNumber: 247,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Tendrils of Intrigue",
    questNumber: 248,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Chasing Ivy",
    questNumber: 249,
    questLevel: 50,
    questGiver: "Ilberd",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Doman Connection",
    questNumber: 250,
    questLevel: 50,
    questGiver: "Ilberd",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "In Flagrante Delicto",
    questNumber: 251,
    questLevel: 50,
    questGiver: "Shinobi",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "A Simple Plan",
    questNumber: 252,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "The Instruments of Our Deliverance",
    questNumber: 253,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "The Road Less Traveled",
    questNumber: 254,
    questLevel: 50,
    questGiver: "Moenbryda",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Eyes Unclouded",
    questNumber: 255,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "The Reason Roaille",
    questNumber: 256,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Let Us Cling Together",
    questNumber: 257,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.4 (Dreams of Ice)"
  },
  {
    questName: "Good Intentions",
    questNumber: 258,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "Bait and Switch",
    questNumber: 259,
    questLevel: 50,
    questGiver: "Ilberd",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "Best Laid Schemes",
    questNumber: 260,
    questLevel: 50,
    questGiver: "Ilberd",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "The Rising Chorus",
    questNumber: 261,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "Aether on Demand",
    questNumber: 262,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "On the Counteroffensive",
    questNumber: 263,
    questLevel: 50,
    questGiver: "Edelstein",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "An Uninvited Ascian",
    questNumber: 264,
    questLevel: 50,
    questGiver: "Edelstein",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "In Memory of Moenbryda",
    questNumber: 265,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.5 (Before the Fall - Part 1)"
  },
  {
    questName: "Mask of Grief",
    questNumber: 266,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Defenders for Ishgard",
    questNumber: 267,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "The Wyrm's Roar",
    questNumber: 268,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Committed to the Cause",
    questNumber: 269,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Volunteer Dragonslayers",
    questNumber: 270,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "An Allied Perspective",
    questNumber: 271,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "The Steps of Faith",
    questNumber: 272,
    questLevel: 50,
    questGiver: "Marcelain",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Administrative Decision",
    questNumber: 273,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "An Unexpected Ambition",
    questNumber: 274,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Ancient Ways, Timeless Wants",
    questNumber: 275,
    questLevel: 50,
    questGiver: "Tataru",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Where We Are Needed",
    questNumber: 276,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "The Least Among Us",
    questNumber: 277,
    questLevel: 50,
    questGiver: "Unsettled Scholar",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "A Time to Every Purpose",
    questNumber: 278,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Come, but Not Gone",
    questNumber: 279,
    questLevel: 50,
    questGiver: "Minfilia",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "The Parting Glass",
    questNumber: 280,
    questLevel: 50,
    questGiver: "Momodi",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Before the Dawn",
    questNumber: 281,
    questLevel: 50,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 2.55 (Before the Fall - Part 2)"
  },
  {
    questName: "Coming to Ishgard",
    questNumber: 282,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Taking in the Sights",
    questNumber: 283,
    questLevel: 50,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Better Half",
    questNumber: 284,
    questLevel: 50,
    questGiver: "House Fortemps Manservant",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Over the Wall",
    questNumber: 285,
    questLevel: 50,
    questGiver: "Artoirel de Fortemps",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Work in Progress",
    questNumber: 286,
    questLevel: 50,
    questGiver: "Redwald",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The First and Foremost",
    questNumber: 287,
    questLevel: 50,
    questGiver: "Rothe",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "From on High",
    questNumber: 288,
    questLevel: 50,
    questGiver: "Thierremont",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Reconnaissance Lost",
    questNumber: 289,
    questLevel: 50,
    questGiver: "Redwald",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "At the End of Our Hope",
    questNumber: 290,
    questLevel: 50,
    questGiver: "Artoirel de Fortemps",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Knights Be Not Proud",
    questNumber: 291,
    questLevel: 50,
    questGiver: "Artoirel de Fortemps",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Onwards and Upwards",
    questNumber: 292,
    questLevel: 50,
    questGiver: "Emmanellain",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "An Indispensable Ally",
    questNumber: 293,
    questLevel: 50,
    questGiver: "Laniaitte de Haillenarte",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Meeting the Neighbors",
    questNumber: 294,
    questLevel: 50,
    questGiver: "Laniaitte de Haillenarte",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Sense of Urgency",
    questNumber: 295,
    questLevel: 50,
    questGiver: "Marielle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Hope Springs Eternal",
    questNumber: 296,
    questLevel: 50,
    questGiver: "Marielle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Series of Unfortunate Events",
    questNumber: 297,
    questLevel: 50,
    questGiver: "Honoroit",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Reward Long in Coming",
    questNumber: 298,
    questLevel: 50,
    questGiver: "Emmanellain",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Divine Intervention",
    questNumber: 299,
    questLevel: 50,
    questGiver: "House Fortemps Steward",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Disclosure",
    questNumber: 300,
    questLevel: 50,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Flame General Affairs",
    questNumber: 301,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "In Search of Raubahn",
    questNumber: 302,
    questLevel: 51,
    questGiver: "Higiri",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Keeping the Flame Alive",
    questNumber: 303,
    questLevel: 51,
    questGiver: "Hozan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "To Siege or Not to Siege",
    questNumber: 304,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Alphinaud's Way",
    questNumber: 305,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "In Search of Iceheart",
    questNumber: 306,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "From One Heretic to Another",
    questNumber: 307,
    questLevel: 51,
    questGiver: "Expedition Leader",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Sounding Out the Amphitheatre",
    questNumber: 308,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Camp of the Convictors",
    questNumber: 309,
    questLevel: 51,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Purple Flame, Purple Flame",
    questNumber: 310,
    questLevel: 51,
    questGiver: "Estinien Wyrmblood",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Where the Chocobos Roam",
    questNumber: 311,
    questLevel: 52,
    questGiver: "Ysayle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Worse than Dragons",
    questNumber: 312,
    questLevel: 52,
    questGiver: "Marcechamp",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Trine Towers",
    questNumber: 313,
    questLevel: 52,
    questGiver: "Ysayle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Gifts for the Outcasts",
    questNumber: 314,
    questLevel: 52,
    questGiver: "Ysayle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Nonmind",
    questNumber: 315,
    questLevel: 52,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Gnathic Deity",
    questNumber: 316,
    questLevel: 53,
    questGiver: "Ysayle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Breaking into Hives",
    questNumber: 317,
    questLevel: 53,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Lord of the Hive",
    questNumber: 318,
    questLevel: 53,
    questGiver: "Ysayle",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Mourn in Passing",
    questNumber: 319,
    questLevel: 53,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Beyond the Clouds",
    questNumber: 320,
    questLevel: 53,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Mountaintop Diplomacy",
    questNumber: 321,
    questLevel: 54,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Moghan's Trial",
    questNumber: 322,
    questLevel: 54,
    questGiver: "Moghan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Mogmug's Trial",
    questNumber: 323,
    questLevel: 54,
    questGiver: "Mogmug",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Mogwin's Trial",
    questNumber: 324,
    questLevel: 54,
    questGiver: "Mogwin",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Moglin's Judgment",
    questNumber: 325,
    questLevel: 54,
    questGiver: "Moglin",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Leaving Moghome",
    questNumber: 326,
    questLevel: 54,
    questGiver: "Moghan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Road to Zenith",
    questNumber: 327,
    questLevel: 54,
    questGiver: "Moghan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Waiting for the Wind to Change",
    questNumber: 328,
    questLevel: 54,
    questGiver: "Moghan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Heart of Ice",
    questNumber: 329,
    questLevel: 54,
    questGiver: "Moghan",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Wyrm's Lair",
    questNumber: 330,
    questLevel: 54,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "New Winds, Old Friends",
    questNumber: 331,
    questLevel: 54,
    questGiver: "Estinien Wyrmblood",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A General Summons",
    questNumber: 332,
    questLevel: 54,
    questGiver: "Tataru",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Awakening in Ul'dah",
    questNumber: 333,
    questLevel: 54,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Brave Resolution",
    questNumber: 334,
    questLevel: 54,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Ready to Fly",
    questNumber: 335,
    questLevel: 55,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Into the Aery",
    questNumber: 336,
    questLevel: 55,
    questGiver: "Estinien Wyrmblood",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Song Begins",
    questNumber: 337,
    questLevel: 55,
    questGiver: "Estinien Wyrmblood",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Unrest in Ishgard",
    questNumber: 338,
    questLevel: 56,
    questGiver: "Estinien Wyrmblood",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "He Who Would Not Be Denied",
    questNumber: 339,
    questLevel: 56,
    questGiver: "Haurchefant Greystone",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Ill-weather Friends",
    questNumber: 340,
    questLevel: 56,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Spice of Life",
    questNumber: 341,
    questLevel: 56,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Noble Indiscretions",
    questNumber: 342,
    questLevel: 56,
    questGiver: "Gibrillont",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Child Apart",
    questNumber: 343,
    questLevel: 56,
    questGiver: "Gibrillont",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Bloodlines",
    questNumber: 344,
    questLevel: 56,
    questGiver: "Gibrillont",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Fire and Blood",
    questNumber: 345,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Knight's Calling",
    questNumber: 346,
    questLevel: 57,
    questGiver: "Hilda",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The Sins of Antiquity",
    questNumber: 347,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "In Search of the Soleil",
    questNumber: 348,
    questLevel: 57,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Into the Blue",
    questNumber: 349,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Familiar Faces",
    questNumber: 350,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Devourer of Worlds",
    questNumber: 351,
    questLevel: 57,
    questGiver: "Lonu Vanu",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Black and the White",
    questNumber: 352,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Bolt, Chain, and Island",
    questNumber: 353,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Difference of Opinion",
    questNumber: 354,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "One Good Turn",
    questNumber: 355,
    questLevel: 57,
    questGiver: "Cid Garlond",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "An Engineering Enterprise",
    questNumber: 356,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Aetherial Trail",
    questNumber: 357,
    questLevel: 57,
    questGiver: "Tataru",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Lost in the Lifestream",
    questNumber: 358,
    questLevel: 57,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Tataru's Surprise",
    questNumber: 359,
    questLevel: 57,
    questGiver: "Tataru",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Onward to Sharlayan",
    questNumber: 360,
    questLevel: 57,
    questGiver: "Y'shtola",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "A Great New Nation",
    questNumber: 361,
    questLevel: 58,
    questGiver: "Y'shtola",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Golems Begone",
    questNumber: 362,
    questLevel: 58,
    questGiver: "Slowfix",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "An Illuminati Incident",
    questNumber: 363,
    questLevel: 58,
    questGiver: "Slowfix",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Leaving Idyllshire",
    questNumber: 364,
    questLevel: 58,
    questGiver: "Slowfix",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Matoya's Cave",
    questNumber: 365,
    questLevel: 59,
    questGiver: "Y'shtola",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Forbidden Knowledge",
    questNumber: 366,
    questLevel: 59,
    questGiver: "Matoya",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "An Eye for Aether",
    questNumber: 367,
    questLevel: 59,
    questGiver: "Matoya",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Hour of Departure",
    questNumber: 368,
    questLevel: 59,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "The First Flight of the Excelsior",
    questNumber: 369,
    questLevel: 59,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Systematic Exploration",
    questNumber: 370,
    questLevel: 59,
    questGiver: "Cid Garlond",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "In Node We Trust",
    questNumber: 371,
    questLevel: 59,
    questGiver: "Guidance Node",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Chimerical Maintenance",
    questNumber: 372,
    questLevel: 59,
    questGiver: "Guidance Node",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Close Encounters of the VIth Kind",
    questNumber: 373,
    questLevel: 59,
    questGiver: "Guidance Node",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Fetters of Lament",
    questNumber: 374,
    questLevel: 59,
    questGiver: "Guidance Node",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "Heavensward",
    questNumber: 375,
    questLevel: 60,
    questGiver: "Guidance Node",
    patch: "Patch 3.0 (Heavensward)"
  },
  {
    questName: "An Uncertain Future",
    questNumber: 376,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "Breaking the Cycle",
    questNumber: 377,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "Another Time, Another Place",
    questNumber: 378,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "In the Eye of the Beholder",
    questNumber: 379,
    questLevel: 60,
    questGiver: "Krile Mayer Baldesion",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "A Little Slow, a Little Late",
    questNumber: 380,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "Dreams of the Lost",
    questNumber: 381,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "Against the Dying of the Light",
    questNumber: 382,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "As Goes Light, So Goes Darkness",
    questNumber: 383,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.1 (As Goes Light, So Goes Darkness)"
  },
  {
    questName: "As It Once Was",
    questNumber: 384,
    questLevel: 60,
    questGiver: "Tataru",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "The Word of the Mother",
    questNumber: 385,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "This War of Ours",
    questNumber: 386,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "Staunch Conviction",
    questNumber: 387,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "Once More, a Favor",
    questNumber: 388,
    questLevel: 60,
    questGiver: "Emmanellain",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "For Those We Have Lost",
    questNumber: 389,
    questLevel: 60,
    questGiver: "Emmanellain",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "Consequences",
    questNumber: 390,
    questLevel: 60,
    questGiver: "Thancred",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "Choices",
    questNumber: 391,
    questLevel: 60,
    questGiver: "Thancred",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "A Spectacle for the Ages",
    questNumber: 392,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "For Those We Can Yet Save",
    questNumber: 393,
    questLevel: 60,
    questGiver: "Aymeric de Borel",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "Causes and Costs",
    questNumber: 394,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.2 (The Gears of Change)"
  },
  {
    questName: "The Man Within",
    questNumber: 395,
    questLevel: 60,
    questGiver: "House Fortemps Knight",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "An Ally for Ishgard",
    questNumber: 396,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "Winning Over the Wyrm",
    questNumber: 397,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "An End to the Song",
    questNumber: 398,
    questLevel: 60,
    questGiver: "Aymeric de Borel",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "Heroes of the Hour",
    questNumber: 399,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "Litany of Peace",
    questNumber: 400,
    questLevel: 60,
    questGiver: "Aymeric de Borel",
    patch: "Patch 3.3 (Revenge of the Horde)"
  },
  {
    questName: "Promises Kept",
    questNumber: 401,
    questLevel: 60,
    questGiver: "House Fortemps Knight",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Shadows of the First",
    questNumber: 402,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Two Sides of a Coin",
    questNumber: 403,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Unlikely Allies",
    questNumber: 404,
    questLevel: 60,
    questGiver: "Bloeidin",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "The Beast That Mourned at the Heart of the Mountain",
    questNumber: 405,
    questLevel: 60,
    questGiver: "620th Order Pickman Ga Bu",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Beneath a Star-filled Sky",
    questNumber: 406,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "When We Were Free",
    questNumber: 407,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Honorable Heroes",
    questNumber: 408,
    questLevel: 60,
    questGiver: "Papalymo",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "One Life for One World",
    questNumber: 409,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "An Ending to Mark a New Beginning",
    questNumber: 410,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.4 (Soul Surrender)"
  },
  {
    questName: "Tidings from Gyr Abania",
    questNumber: 411,
    questLevel: 60,
    questGiver: "Tataru",
    patch: "Patch 3.5 (The Far Edge of Fate - Part 1)"
  },
  {
    questName: "An Envoy for Ishgard",
    questNumber: 412,
    questLevel: 60,
    questGiver: "Lucia goe Junius",
    patch: "Patch 3.5 (The Far Edge of Fate - Part 1)"
  },
  {
    questName: "An Allied Decision",
    questNumber: 413,
    questLevel: 60,
    questGiver: "Aymeric de Borel",
    patch: "Patch 3.5 (The Far Edge of Fate - Part 1)"
  },
  {
    questName: "Griffin, Griffin on the Wall",
    questNumber: 414,
    questLevel: 60,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 3.5 (The Far Edge of Fate - Part 1)"
  },
  {
    questName: "Louisoix's Finest Student",
    questNumber: 415,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.5 (The Far Edge of Fate - Part 1)"
  },
  {
    questName: "The Obvious Solution",
    questNumber: 416,
    questLevel: 60,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 3.56 (The Far Edge of Fate - Part 2)"
  },
  {
    questName: "The Greater Obeisance",
    questNumber: 417,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.56 (The Far Edge of Fate - Part 2)"
  },
  {
    questName: "Fly Free, My Pretty",
    questNumber: 418,
    questLevel: 60,
    questGiver: "Yda",
    patch: "Patch 3.56 (The Far Edge of Fate - Part 2)"
  },
  {
    questName: "The Far Edge of Fate",
    questNumber: 419,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 3.56 (The Far Edge of Fate - Part 2)"
  },
  {
    questName: "Beyond the Great Wall",
    questNumber: 420,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Lyse Takes the Lead",
    questNumber: 421,
    questLevel: 60,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Promise of a New Beginning",
    questNumber: 422,
    questLevel: 60,
    questGiver: "Conrad Kemp",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Haven for the Bold",
    questNumber: 423,
    questLevel: 60,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Bargain Struck",
    questNumber: 424,
    questLevel: 60,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Friend of a Friend in Need",
    questNumber: 425,
    questLevel: 60,
    questGiver: "M'naago Rahz",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Signed, Sealed, to Be Delivered",
    questNumber: 426,
    questLevel: 60,
    questGiver: "M'naago Rahz",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Best Served with Cold Steel",
    questNumber: 427,
    questLevel: 60,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Let Fill Your Hearts with Pride",
    questNumber: 428,
    questLevel: 60,
    questGiver: "M'naago Rahz",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Familiar Face Forgotten",
    questNumber: 429,
    questLevel: 60,
    questGiver: "Meffrid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Prodigal Daughter",
    questNumber: 430,
    questLevel: 60,
    questGiver: "Meffrid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Hard Country",
    questNumber: 431,
    questLevel: 60,
    questGiver: "Griseldis",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Death by a Thousand Rocks",
    questNumber: 432,
    questLevel: 60,
    questGiver: "Angry Coeurl",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Life More Ordinary",
    questNumber: 433,
    questLevel: 60,
    questGiver: "Meffrid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Color of Angry Qiqirn",
    questNumber: 434,
    questLevel: 60,
    questGiver: "Meffrid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Black Wolf's Pups",
    questNumber: 435,
    questLevel: 60,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Homeward Bound",
    questNumber: 436,
    questLevel: 60,
    questGiver: "Meffrid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Where Men Go as One",
    questNumber: 437,
    questLevel: 60,
    questGiver: "Conrad Kemp",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Future Rust, Future Dust",
    questNumber: 438,
    questLevel: 60,
    questGiver: "Beves",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Dash of Green",
    questNumber: 439,
    questLevel: 60,
    questGiver: "Ahelissa",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Ye Wayward Brothers",
    questNumber: 440,
    questLevel: 60,
    questGiver: "Ananta Battlemaid",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Token of Faith",
    questNumber: 441,
    questLevel: 60,
    questGiver: "Swarthy Resistance Fighter",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Crossing the Velodyna",
    questNumber: 442,
    questLevel: 61,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "In Crimson It Began",
    questNumber: 443,
    questLevel: 61,
    questGiver: "Pipin Tarupin",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Fires Fade",
    questNumber: 444,
    questLevel: 61,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Bereft of Hearth and Home",
    questNumber: 445,
    questLevel: 61,
    questGiver: "Pipin Tarupin",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Divide and Conquer",
    questNumber: 446,
    questLevel: 61,
    questGiver: "Conrad Kemp",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Lies, Damn Lies, and Pirates",
    questNumber: 447,
    questLevel: 61,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Tales from the Far East",
    questNumber: 448,
    questLevel: 61,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Not without Incident",
    questNumber: 449,
    questLevel: 61,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Man from Ul'dah",
    questNumber: 450,
    questLevel: 61,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Where the Streets Are Paved with Koban",
    questNumber: 451,
    questLevel: 61,
    questGiver: "Hancock",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "By the Grace of Lord Lolorito",
    questNumber: 452,
    questLevel: 61,
    questGiver: "Hancock",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Good Samurai Is Hard to Find",
    questNumber: 453,
    questLevel: 61,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "It's Probably a Trap",
    questNumber: 454,
    questLevel: 61,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Making the Catfish Sing",
    questNumber: 455,
    questLevel: 61,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Once More, to the Ruby Sea",
    questNumber: 456,
    questLevel: 62,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Open Water",
    questNumber: 457,
    questLevel: 62,
    questGiver: "Soroban",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Boys with Boats",
    questNumber: 458,
    questLevel: 62,
    questGiver: "Tansui",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "To Bend with the Wind",
    questNumber: 459,
    questLevel: 62,
    questGiver: "Soroban",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Confederate Consternation",
    questNumber: 460,
    questLevel: 62,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Solace of the Sea",
    questNumber: 461,
    questLevel: 62,
    questGiver: "Afumi",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Arrows of Misfortune",
    questNumber: 462,
    questLevel: 62,
    questGiver: "Kajika",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Last Voyage",
    questNumber: 463,
    questLevel: 62,
    questGiver: "Aranami",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Alisaie's Stones",
    questNumber: 464,
    questLevel: 62,
    questGiver: "Hirase",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Under the Sea",
    questNumber: 465,
    questLevel: 62,
    questGiver: "Rasho",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Of Kojin and Kami",
    questNumber: 466,
    questLevel: 62,
    questGiver: "Soroban",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "In Soroban We Trust",
    questNumber: 467,
    questLevel: 63,
    questGiver: "Soroban",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Forever and Ever Apart",
    questNumber: 468,
    questLevel: 63,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "In Darkness the Magatama Dreams",
    questNumber: 469,
    questLevel: 63,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Whims of the Divine",
    questNumber: 470,
    questLevel: 63,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Breaking and Delivering",
    questNumber: 471,
    questLevel: 63,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Lord of the Revel",
    questNumber: 472,
    questLevel: 63,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Tide Goes in, Imperials Go Out",
    questNumber: 473,
    questLevel: 63,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Silence in Three Parts",
    questNumber: 474,
    questLevel: 63,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Life after Doma",
    questNumber: 475,
    questLevel: 64,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Glimpse of Madness",
    questNumber: 476,
    questLevel: 64,
    questGiver: "Liberation Front Guard",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Stubborn Remainder",
    questNumber: 477,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Ones We Leave Behind",
    questNumber: 478,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A New Ruby Tithe",
    questNumber: 479,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Will to Live",
    questNumber: 480,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Daughter of the Deep",
    questNumber: 481,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Path of No Return",
    questNumber: 482,
    questLevel: 64,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Time between the Seconds",
    questNumber: 483,
    questLevel: 64,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "All the Little Angels",
    questNumber: 484,
    questLevel: 64,
    questGiver: "Isse",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Here There Be Xaela",
    questNumber: 485,
    questLevel: 65,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Search for Lord Hien",
    questNumber: 486,
    questLevel: 65,
    questGiver: "Yugiri",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Season for War",
    questNumber: 487,
    questLevel: 65,
    questGiver: "Cirina",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "An Impossible Dream",
    questNumber: 488,
    questLevel: 65,
    questGiver: "Cirina",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Stars in the Dark",
    questNumber: 489,
    questLevel: 65,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Warrior's Welcome",
    questNumber: 490,
    questLevel: 65,
    questGiver: "Cirina",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Heart of Nations",
    questNumber: 491,
    questLevel: 65,
    questGiver: "Cirina",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Trial Before the Trial",
    questNumber: 492,
    questLevel: 65,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "In the Footsteps of Bardam the Brave",
    questNumber: 493,
    questLevel: 65,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Children of Azim",
    questNumber: 494,
    questLevel: 65,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Labors of Magnai",
    questNumber: 495,
    questLevel: 66,
    questGiver: "Baatu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "For Love of the Moon",
    questNumber: 496,
    questLevel: 66,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Sworn Enemies of the Sun",
    questNumber: 497,
    questLevel: 66,
    questGiver: "Magnai",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Undying Ones",
    questNumber: 498,
    questLevel: 66,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Final Peace",
    questNumber: 499,
    questLevel: 66,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "As the Gods Will",
    questNumber: 500,
    questLevel: 66,
    questGiver: "Gosetsu",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Naadam",
    questNumber: 501,
    questLevel: 66,
    questGiver: "Cirina",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Glory to the Khagan",
    questNumber: 502,
    questLevel: 66,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "In Crimson They Walked",
    questNumber: 503,
    questLevel: 66,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Hour of Reckoning",
    questNumber: 504,
    questLevel: 66,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Room Where It Happened",
    questNumber: 505,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "How Tataru Got Her Groove Back",
    questNumber: 506,
    questLevel: 67,
    questGiver: "Tataru",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Seeds of Despair",
    questNumber: 507,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Limits of Our Endurance",
    questNumber: 508,
    questLevel: 67,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Broken Steel, Broken Men",
    questNumber: 509,
    questLevel: 67,
    questGiver: "Tsuranuki",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Doma Within",
    questNumber: 510,
    questLevel: 67,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "On the Eve of Destiny",
    questNumber: 511,
    questLevel: 67,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Die Is Cast",
    questNumber: 512,
    questLevel: 67,
    questGiver: "Hien",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The World Turned Upside Down",
    questNumber: 513,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "A Swift and Secret Departure",
    questNumber: 514,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "While You Were Away",
    questNumber: 515,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Rhalgr's Beacon",
    questNumber: 516,
    questLevel: 67,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Fortunes of War",
    questNumber: 517,
    questLevel: 67,
    questGiver: "Conrad Kemp",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Rising Fortunes, Rising Spirits",
    questNumber: 518,
    questLevel: 67,
    questGiver: "Conrad Kemp",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Lure of the Dream",
    questNumber: 519,
    questLevel: 67,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Lady of Bliss",
    questNumber: 520,
    questLevel: 67,
    questGiver: "Vajra",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Silence of the Gods",
    questNumber: 521,
    questLevel: 67,
    questGiver: "Vajra",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The First of Many",
    questNumber: 522,
    questLevel: 68,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Strong and Unified",
    questNumber: 523,
    questLevel: 68,
    questGiver: "M'naago Rahz",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Hells Open",
    questNumber: 524,
    questLevel: 68,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Heavens Weep",
    questNumber: 525,
    questLevel: 68,
    questGiver: "Alisaie Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Road Home",
    questNumber: 526,
    questLevel: 68,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "For the Living and the Dead",
    questNumber: 527,
    questLevel: 68,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Above the Churning Waters",
    questNumber: 528,
    questLevel: 68,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Path Forward",
    questNumber: 529,
    questLevel: 68,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "With Tired Hands We Toil",
    questNumber: 530,
    questLevel: 68,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Where Courage Endures",
    questNumber: 531,
    questLevel: 68,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Price of Freedom",
    questNumber: 532,
    questLevel: 69,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Raubahn's Invitation",
    questNumber: 533,
    questLevel: 69,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Liberty or Death",
    questNumber: 534,
    questLevel: 69,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Lady in Red",
    questNumber: 535,
    questLevel: 69,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Upon the Great Loch's Shore",
    questNumber: 536,
    questLevel: 69,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Key to Victory",
    questNumber: 537,
    questLevel: 69,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Resonant",
    questNumber: 538,
    questLevel: 69,
    questGiver: "Lyse Hext",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Legacy of Our Fathers",
    questNumber: 539,
    questLevel: 69,
    questGiver: "Alphinaud Leveilleur",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "The Measure of His Reach",
    questNumber: 540,
    questLevel: 70,
    questGiver: "Raubahn",
    patch: "Patch 4.0 (Stormblood)"
  },
  {
    questName: "Stormblood",
    questNumber: 541,
    questLevel: 70,
    questGiver: "Pipin Tarupin",
    patch: "Patch 4.0 (Stormblood)"
  }
];
function findMatches(wordToMatch, quests) {
  return quests.filter(quest => {
    // here matches the quest to what is being searched
    const regex = new RegExp(wordToMatch, "gi");
    return quest.questName.match(regex);
  });
}
function displayQInfo(questNumber) {
  const selectedQuest = quests.find(function(element) {
    return element.questNumber === questNumber;
  });
  questInfoElement.innerHTML = `<li>MSQ Competion Rate: ${Number(
    (selectedQuest.questNumber / 628) * 100
  ).toFixed(2)}%</li>
                                    <li>Quest Giver: ${
                                      selectedQuest.questGiver
                                    }</li>
                                    <li>It was introduced in patch: ${
                                      selectedQuest.patch
                                    }.</li>`;
}
function displayMatches() {
  const matchArray = findMatches(this.value, quests);
  const html = matchArray
    .map(quest => {
      const regex = new RegExp(this.value, "gi");
      const questName = quest.questName.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
          <li>
            <a class="Name" href="#" onclick="displayQInfo(${
              quest.questNumber
            })">${questName}</a>
          </li>
        `;
    })
    .join("");
  results.innerHTML = html;
}
const searchInput = document.querySelector(".search");
const results = document.querySelector(".results");
const questInfoElement = document.querySelector(".questInfo");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
