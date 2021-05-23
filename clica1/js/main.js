// variables
var gameData = {
  gold: 1,
  goldPerClick: 1,
  goldPerClickCost: 10,
  perClickLevel: 1,
  shokoCost: 100,
  shokoLevel: 0,
  storyCost: 500,
  storyLevel: 0,
  goldPerSecond: 0,
  blanketUpgradeLevel: 0,
  shokoUpgradeLevel: 0,
  storyUpgradeLevel: 0,
  blanketUpgradeCost: 100,
  shokoUpgradeCost: 500,
  storyUpgradeCost: 1000,


  gameUpgrades: {
    blanket: false
  }
}

class tower {
  constructor(base_cost, passive_gold, upgrade_cost) {
    this.level = 0
    this.cost = base_cost
    this.passiveGold = passive_gold
    this.upgradeCost = upgrade_cost
    this.has_upgraded = false
  }
}

var towers = {
  shoko : {    
    cost: 100,
    level: 0,
    passive_gold_increase : 1,
    upgradeCost: 500,
    upgradeLevel: 0,
  },
  blanket : {
    cost: 10,
    level: 1,
    passive_gold_increase : null,
    UpgradeCost: 100,
    UpgradeLevel: 0,
  },
  story : {
    cost: 500,
    level: 0,
    passive_gold_increase : 35, 
    UpgradeCost: 1000,
    UpgradeLevel: 0,
  }
}
const perClickUpgrade = document.getElementById("perClickUpgrade")
// passiveGold / mineGold
var mainGameLoop = window.setInterval(function () {
  passiveGold()
}, 1000)

window.setInterval(function(){
  document.getElementById("goldMined").innerHTML = Math.round(gameData.gold) + " Motas went to sleep"
}, 100)

// functions
function mineGold() {
  gameData.gold += towers.blanket.level + 1;
}
function passiveGold() {
  gameData.gold += gameData.goldPerSecond;
}

function BuyLevel(tower_name) {
  tower_data = towers[tower_name]
  if (gameData.gold >= tower_data.cost) {
    gameData.gold -= gameData.goldPerClickCost;
    tower_data++;

  }
}


// SHOP
function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.perClickLevel += 1
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 1.5
    document.getElementById("perClickUpgrade").innerHTML = "Blanket (Currently Level " + gameData.perClickLevel + ") Cost: " + Math.round(gameData.goldPerClickCost) + " Mota"
  }
}
function upgradeBlanket() {
  if (gameData.gold >= gameData.blanketUpgradeCost) {
    gameData.gold -= gameData.blanketUpgradeCost
    gameData.blanketUpgradeLevel += 1
    gameData.goldPerClick *= 2
    gameData.blanketUpgradeCost *= 10
    document.getElementById("upgradeBlanket").innerHTML = "Blanket Upgrade (Currently Level " + gameData.blanketUpgradeLevel + ") Cost: " + Math.round(gameData.blanketUpgradeCost) + " Mota"
  }
}

function buyShoko() {
  if (gameData.gold >= gameData.shokoCost) {
    gameData.gold -= gameData.shokoCost
    gameData.goldPerSecond += 10
    gameData.shokoLevel += 1
    gameData.shokoCost *= 1.5
    document.getElementById("shokoUpgrade").innerHTML = "Shoko (Currently Level " + gameData.shokoLevel + ") Cost: " + Math.round(gameData.shokoCost) + " Mota"
  }
}
function upgradeShoko() {
  if (gameData.gold >= gameData.shokoUpgradeCost) {
    gameData.gold -= gameData.shokoUpgradeCost
    gameData.shokoUpgradeLevel += 1
    gameData.goldPerSecond *= 2
    gameData.shokoUpgradeCost *= 10
    document.getElementById("upgradeShoko").innerHTML = "Shoko Upgrade (Currently Level " + gameData.shokoUpgradeLevel + ") Cost: " + Math.round(gameData.shokoUpgradeCost) + " Mota"
  }
}
function buyStory() {
  if (gameData.gold >= gameData.storyCost) {
    gameData.gold -= gameData.storyCost
    gameData.goldPerSecond += 35
    gameData.storyLevel += 1
    gameData.storyCost *= 1.5
    document.getElementById("storyUpgrade").innerHTML = "Bedtime Story (Currently Level " + gameData.storyLevel + ") Cost: " + Math.round(gameData.storyCost) + " Mota"
  }
}
function upgradeStory() {
  if (gameData.gold >= gameData.storyUpgradeCost) {
    gameData.gold -= gameData.storyUpgradeCost
    gameData.storyUpgradeLevel += 1
    gameData.goldPerSecond *= 2
    gameData.storyUpgradeCost *= 10
    document.getElementById("upgradeStory").innerHTML = "Story Upgrade (Currently Level " + gameData.storyUpgradeLevel + ") Cost: " + Math.round(gameData.storyUpgradeCost) + " Mota"
  }
}