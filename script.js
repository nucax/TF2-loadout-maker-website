// script.js

// Define weapon lists for each class (primary, secondary, melee).
const weapons = {
  Scout: {
    primary: [
      "Scattergun",
      "Force-A-Nature",
      "Shortstop",
      "Soda Popper",
      "Baby Face’s Blaster",
      "Back Scatter"
    ],
    secondary: [
      "Pistol",
      "Lugermorph",
      "C.A.P.P.E.R",
      "Winger",
      "Pretty Boy’s Pocket Pistol",
      "Flying Guillotine",
      "Bonk! Atomic Punch",
      "Crit-a-Cola",
      "Mad Milk",
      "Mutated Milk"
    ],
    melee: [
      "Bat",
      "Sandman",
      "Holy Mackerel",
      "Unarmed Combat",
      "Candy Cane",
      "Boston Basher",
      "Three-Rune Blade",
      "Fan O’War",
      "Atomizer",
      "Wrap Assassin"
    ]
  },
  Soldier: {
    primary: [
      "Rocket Launcher",
      "Original",
      "Direct Hit",
      "Black Box",
      "Rocket Jumper",
      "Liberty Launcher",
      "Cow Mangler 5000",
      "Beggar’s Bazooka"
    ],
    secondary: [
      "Shotgun",
      "Reserve Shooter",
      "Buff Banner",
      "Battalion’s Backup",
      "Concheror",
      "Gunboats",
      "Mantreads",
      "Righteous Bison"
    ],
    melee: [
      "Shovel",
      "Equalizer",
      "Escape Plan",
      "Pain Train",
      "Half-Zatoichi",
      "Disciplinary Action",
      "Market Gardener"
    ]
  },
  Pyro: {
    primary: [
      "Flamethrower",
      "Nostromo Napalmer",
      "Backburner",
      "Degreaser",
      "Phlogistinator",
      "Dragon’s Fury"
    ],
    secondary: [
      "Shotgun",
      "Reserve Shooter",
      "Flare Gun",
      "Detonator",
      "Manmelter",
      "Scorch Shot",
      "Thermal Thruster",
      "Gas Passer"
    ],
    melee: [
      "Fire Axe",
      "Axtinguisher",
      "Homewrecker",
      "Maul",
      "Powerjack",
      "Back Scratcher",
      "Sharpened Volcano Fragment",
      "Third Degree",
      "Neon Annihilator",
      "Hot Hand"
    ]
  },
  Demoman: {
    primary: [
      "Grenade Launcher",
      "Loch-n-Load",
      "Ali Baba’s Wee Booties",
      "Bootlegger",
      "Loose Cannon",
      "Iron Bomber"
    ],
    secondary: [
      "Stickybomb Launcher",
      "Scottish Resistance",
      "Chargin’ Targe",
      "Splendid Screen",
      "Tide Turner",
      "Quickiebomb Launcher"
    ],
    melee: [
      "Bottle",
      "Scottish Handshake",
      "Eyelander",
      "Horseless Headless Horsemann’s Headtaker",
      "Nessie’s Nine Iron",
      "Skullcutter",
      "Pain Train",
      "Claidheamh Mòr",
      "Half-Zatoichi",
      "Ullapool Caber"
    ]
  },
  Heavy: {
    primary: [
      "Minigun",
      "Iron Curtain",
      "Natascha",
      "Brass Beast",
      "Tomislav",
      "Huo-Long Heater"
    ],
    secondary: [
      "Shotgun",
      "Family Business",
      "Sandvich",
      "Robo-Sandvich",
      "Dalokohs Bar",
      "Fishcake",
      "Buffalo Steak Sandvich",
      "Second Banana"
    ],
    melee: [
      "Fists",
      "Apoco-Fists",
      "Killing Gloves of Boxing",
      "Warrior’s Spirit",
      "Fists of Steel",
      "Eviction Notice"
      // Holiday Punch omitted as festive-only
    ]
  },
  Engineer: {
    primary: [
      "Shotgun",
      "Frontier Justice",
      "Widowmaker",
      "Pomson 6000",
      "Rescue Ranger"
    ],
    secondary: [
      "Pistol",
      "Lugermorph",
      "C.A.P.P.E.R",
      "Short Circuit"
    ],
    melee: [
      "Wrench",
      "Golden Wrench",
      "Southern Hospitality",
      "Gunslinger",
      "Jag",
      "Eureka Effect"
    ]
  },
  Medic: {
    primary: [
      "Syringe Gun",
      "Blutsauger",
      "Crusader’s Crossbow",
      "Overdose"
    ],
    secondary: [
      "Medi Gun",
      "Kritzkrieg",
      "Quick-Fix",
      "Vaccinator"
    ],
    melee: [
      "Bonesaw",
      "Ubersaw",
      "Vita-Saw",
      "Amputator",
      "Solemn Vow"
    ]
  },
  Sniper: {
    primary: [
      "Sniper Rifle",
      "Sydney Sleeper",
      "Bazaar Bargain",
      "Machina",
      "Hitman’s Heatmaker",
      "Classic"
    ],
    secondary: [
      "SMG",
      "Cleaner’s Carbine",
      "Jarate",
      "Razorback",
      "Self-Aware Beauty Mark",
      "Darwin’s Danger Shield",
      "Cozy Camper"
    ],
    melee: [
      "Kukri",
      "Tribalman’s Shiv",
      "Bushwacka",
      "Shahanshah"
    ]
  },
  Spy: {
    primary: [
      "Revolver",
      "Ambassador",
      "Big Kill",
      "L’Etranger",
      "Enforcer",
      "Diamondback"
    ],
    secondary: [
      "Sapper",
      "Red-Tape Recorder"
      // Festive Sapper omitted as festive-only
    ],
    melee: [
      "Knife",
      "Conniver’s Kunai",
      "Your Eternal Reward",
      "Big Earner",
      "Spy-cicle"
    ]
  }
};

// Utility to pick a random item from an array
function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Generate and display a random loadout for the selected class
function generateLoadout() {
  const className = document.getElementById('classSelect').value;
  const classWeapons = weapons[className];
  const primary = getRandomItem(classWeapons.primary);
  const secondary = getRandomItem(classWeapons.secondary);
  const melee = getRandomItem(classWeapons.melee);

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 
    `<h2>${className} Loadout</h2>` +
    `<p><strong>Primary:</strong> ${primary}</p>` +
    `<p><strong>Secondary:</strong> ${secondary}</p>` +
    `<p><strong>Melee:</strong> ${melee}</p>`;
}
