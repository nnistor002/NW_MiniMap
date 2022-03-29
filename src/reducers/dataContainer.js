const data = {
  Categories: {
    Notes: [],
    Mobs: [],
    Mining: {
      Saltpeter: [],
      Iron: [],
      Silver: [],
      Gold: [],
      Starmetal: [],
      Lodestone: [],
      Platinum: [],
      Orichalcum: [],
      SeepingStone: [],
      Blightcrag: [],
      Lifecrag: [],
      Earthcrag: [],
      Soulspire: [],
      Shockspire: [],
      Scorchstone: [],
      Springstone: [],
    },
    Harvesting: {
      Hemp: [],
      Silkweed: [],
      Wirefiber: [],
      Blightroot: [],
      Dragonglory: [],
      Earthspine: [],
      Lifebloom: [],
      Rivercress: [],
      Shockblub: [],
      Soulspire: [],
      Blightmoth: [],
      "Earthshell Turtle": [],
      "Floating Spinefish": [],
      Lifemoth: [],
      "Lightning Beetle": [],
      "Salamander Snail": [],
      Soulwyrm: [],
    },
    Fungi: {
      Bumbleblossom: [],
      "Capped Tanglewisp": [],
      "Cascaded Gillflower": [],
      "Corrupted Bloodspore": [],
      "Flowering Tubecap": [],
      "Fronded Petalcap": [],
      "Slimy Twistcap": [],
      Spinecap: [],
      Suncreeper: [],
      Tanglewisp: [],
      Tendrilspine: [],
      Toadpot: [],
      "Twisted Tubecap": [],
      "Void Pitcher": [],
      "Warm Platecap": [],
      "Weeping Shellbed": [],
    },
    Tracking: {
      Alligator: [],
      Bear: [],
      Bison: [],
      Boar: [],
      Bobcat: [],
      Cow: [],
      Elk: [],
      Goat: [],
      Lion: [],
      Lynx: [],
      Pig: [],
      Rabbit: [],
      Sheep: [],
      Turkey: [],
      Wolf: [],
      "Forest Elemental": [],
      "Mountain Elemental": [],
      "Tundra Elemental": [],
    },
    Farming: {
      Barley: [],
      Berry: [],
      Blueberry: [],
      Broccoli: [],
      Cabbage: [],
      Carrot: [],
      Corn: [],
      Cranberries: [],
      Herbs: [],
      Honey: [],
      Melon: [],
      Nuts: [],
      Potato: [],
      Squash: [],
      Strawberry: [],
      Wheat: [],
    },
    Logging: {
      "Iron Wood": [],
      "Wyrd Wood": [],
    },
    JSONDATAFOR: "NWMINIMAP",
  },
};
const dataContainer = (state = data, action) => {
  switch (action.type) {
    case "GETDATA":
      return state;
    case "UPLOADDATA":
      return (state = action.payload);
    case "APPENDDATA":
      state.Categories[action.payload[0]][action.payload[1]].push(
        action.payload[2]
      );
      return state;
    case "APPENDDATAINPUTTYPE":
      state.Categories[action.payload[0]].push([
        action.payload[1],
        action.payload[2],
      ]);
      return state;
    case "REMOVEDATA":
      if (action.payload[0] === "Notes" || action.payload[0] === "Mobs") {
        state.Categories[action.payload[0]].splice(
          [action.payload[1], action.payload[2]],
          1
        );
      } else {
        state.Categories[action.payload[0]][action.payload[1]].splice(
          action.payload[2],
          1
        );
      }

      return state;
    default:
      return state;
  }
};

export default dataContainer;
