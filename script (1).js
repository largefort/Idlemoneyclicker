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
  }
};
document.body.appendChild(moneyPerSecondUpgradeButton);

var moneyDisplay = document.createElement('div');
moneyDisplay.innerHTML = 'Money: ' + money;
document.body.appendChild(moneyDisplay);

var moneyPerSecondDisplay = document.createElement('div');
moneyPerSecondDisplay.innerHTML = 'Money Per Second: ' + moneyPerSecond;
document.body.appendChild(moneyPerSecondDisplay);

var moneyPerClickDisplay = document.createElement('div');
moneyPerClickDisplay.innerHTML = 'Money Per Click: ' + moneyPerClick;
document.body.appendChild(moneyPerClickDisplay);

var moneyPerClickUpgradeDisplay = document.createElement('div');
moneyPerClickUpgradeDisplay.innerHTML = 'Money Per Click Upgrade: ' + moneyPerClickUpgrade;
document.body.appendChild(moneyPerClickUpgradeDisplay);

var moneyPerSecondUpgradeDisplay = document.createElement('div');
moneyPerSecondUpgradeDisplay.innerHTML = 'Money Per Second Upgrade: ' + moneyPerSecondUpgrade;
document.body.appendChild(moneyPerSecondUpgradeDisplay);

var moneyPerClickUpgradeCostDisplay = document.createElement('div');
moneyPerClickUpgradeCostDisplay.innerHTML = 'Money Per Click Upgrade Cost: ' + moneyPerClickUpgradeCost;
document.body.appendChild(moneyPerClickUpgradeCostDisplay);

var moneyPerSecondUpgradeCostDisplay = document.createElement('div');
moneyPerSecondUpgradeCostDisplay.innerHTML = 'Money Per Second Upgrade Cost: ' + moneyPerSecondUpgradeCost;
document.body.appendChild(moneyPerSecondUpgradeCostDisplay);

var moneyButton = document.createElement('button');
moneyButton.innerHTML = 'Click for Money';
moneyButton.onclick = function() {
  money += moneyPerClick + moneyPerClickUpgrade;
  moneyDisplay.innerHTML = 'Money: ' + money;
};
document.body.appendChild(moneyButton);

setInterval(function() {
  money += moneyPerSecond + moneyPerSecondUpgrade;
  moneyDisplay.innerHTML = 'Money: ' + money;
}, 1000);

var gameTheme = document.createElement('div');
gameTheme.innerHTML = '<style>body { background-color: black; color: white; }</style>';
document.body.appendChild(gameTheme);

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
  money = parseInt(localStorage.getItem('money'));
  moneyPerSecond = parseInt(localStorage.getItem('moneyPerSecond'));
  moneyPerClick = parseInt(localStorage.getItem('moneyPerClick'));
  moneyPerClickUpgrade = parseInt(localStorage.getItem('moneyPerClickUpgrade'));
  moneyPerSecondUpgrade = parseInt(localStorage.getItem('moneyPerSecondUpgrade'));
  moneyPerClickUpgradeCost = parseInt(localStorage.getItem('moneyPerClickUpgradeCost'));
  moneyPerSecondUpgradeCost = parseInt(localStorage.getItem('moneyPerSecondUpgradeCost'));
};

var saveButton = document.createElement('button');
saveButton.innerHTML = 'Save';
saveButton.onclick = function() {
  save();
};
document.body.appendChild(saveButton);

var loadButton = document.createElement('button');
loadButton.innerHTML = 'Load';
loadButton.onclick = function() {
  load();
};
document.body.appendChild(loadButton);

var graphicsSettings = document.createElement('div');
graphicsSettings.innerHTML = '<style>button { background-color: black; color: white; }</style>';
document.body.appendChild(graphicsSettings);
