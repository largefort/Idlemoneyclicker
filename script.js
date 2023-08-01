var money = 100;
var moneyPerSecond = 0;
var moneyPerClick = 1;
var moneyPerClickUpgrade = 10;
var moneyPerSecondUpgrade = 1;
var moneyPerClickUpgradeCost = 10;
var moneyPerSecondUpgradeCost = 100;

var moneyPerClickUpgradeButton = document.createElement('button');
moneyPerClickUpgradeButton.innerHTML = 'Upgrade Clicking Power';
moneyPerClickUpgradeButton.onclick = function() {
  if (money >= moneyPerClickUpgradeCost) {
    money -= moneyPerClickUpgradeCost;
    moneyPerClickUpgrade += 1;
    moneyPerClickUpgradeCost *= 2;
    moneyPerClickUpgradeButton.innerHTML = 'Upgrade Clicking Power (' + moneyPerClickUpgradeCost + ')';
    save();
  }
};
document.body.appendChild(moneyPerClickUpgradeButton);

var moneyPerSecondUpgradeButton = document.createElement('button');
moneyPerSecondUpgradeButton.innerHTML = 'Upgrade Money Per Second';
moneyPerSecondUpgradeButton.onclick = function() {
  if (money >= moneyPerSecondUpgradeCost) {
    money -= moneyPerSecondUpgradeCost;
    moneyPerSecondUpgrade += 1;
    moneyPerSecondUpgradeCost *= 2;
    moneyPerSecondUpgradeButton.innerHTML = 'Upgrade Money Per Second (' + moneyPerSecondUpgradeCost + ')';
    save();
  }
};
document.body.appendChild(moneyPerSecondUpgradeButton);

var moneyButton = document.createElement('button');
moneyButton.innerHTML = 'Click for Money';
moneyButton.onclick = function() {
  money += moneyPerClick + moneyPerClickUpgrade;
  save();
};
document.body.appendChild(moneyButton);

setInterval(function() {
  money += moneyPerSecond + moneyPerSecondUpgrade;
  save();
}, 1000);

var moneyDisplay = document.createElement('div');
document.body.appendChild(moneyDisplay);

var moneyPerSecondDisplay = document.createElement('div');
document.body.appendChild(moneyPerSecondDisplay);

var moneyPerClickDisplay = document.createElement('div');
document.body.appendChild(moneyPerClickDisplay);

var moneyPerClickUpgradeDisplay = document.createElement('div');
document.body.appendChild(moneyPerClickUpgradeDisplay);

var moneyPerSecondUpgradeDisplay = document.createElement('div');
document.body.appendChild(moneyPerSecondUpgradeDisplay);

var moneyPerClickUpgradeCostDisplay = document.createElement('div');
document.body.appendChild(moneyPerClickUpgradeCostDisplay);

var moneyPerSecondUpgradeCostDisplay = document.createElement('div');
document.body.appendChild(moneyPerSecondUpgradeCostDisplay);

var gameTheme = document.createElement('div');
gameTheme.innerHTML = '<style>body { background-color: black; color: white; }</style>';
document.body.appendChild(gameTheme);

var graphicsSettings = document.createElement('div');
graphicsSettings.innerHTML = '<style>button { background-color: black; color: white; }</style>';
document.body.appendChild(graphicsSettings);

var save = function() {
  localStorage.setItem('money', money);
  localStorage.setItem('moneyPerSecond', moneyPerSecond);
  localStorage.setItem('moneyPerClick', moneyPerClick);
  localStorage.setItem('moneyPerClickUpgrade', moneyPerClickUpgrade);
  localStorage.setItem('moneyPerSecondUpgrade', moneyPerSecondUpgrade);
  localStorage.setItem('moneyPerClickUpgradeCost', moneyPerClickUpgradeCost);
  localStorage.setItem('moneyPerSecondUpgradeCost', moneyPerSecondUpgradeCost);
};

var load = function() {
  var savedMoney = localStorage.getItem('money');
  if(savedMoney) {
    money = parseInt(savedMoney);
    moneyPerSecond = parseInt(localStorage.getItem('moneyPerSecond'));
    moneyPerClick = parseInt(localStorage.getItem('moneyPerClick'));
    moneyPerClickUpgrade = parseInt(localStorage.getItem('moneyPerClickUpgrade'));
    moneyPerSecondUpgrade = parseInt(localStorage.getItem('moneyPerSecondUpgrade'));
    moneyPerClickUpgradeCost = parseInt(localStorage.getItem('moneyPerClickUpgradeCost'));
    moneyPerSecondUpgradeCost = parseInt(localStorage.getItem('moneyPerSecondUpgradeCost'));
  }
};

// Call load function at the start of the game to load any saved state
load();
