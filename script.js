// Game variables
let money = 0;
let mpc = 1;
let mps = 0;
let mpsUpgradeCost = 50; // Initial cost of MPS upgrade
let mpsUpgradeMultiplier = 1.2; // Multiplier to increase MPS upgrade cost
let mpsUpgradeValue = 1; // Amount to increase MPS by on each upgrade

// Load data from local storage if available
const savedData = JSON.parse(localStorage.getItem('idleMoneyClicker'));
if (savedData) {
  money = savedData.money;
  mpc = savedData.mpc;
  mps = savedData.mps;
  mpsUpgradeCost = savedData.mpsUpgradeCost;
}

// Function to update the displayed values
function updateDisplay() {
  const moneyDisplay = document.getElementById('money');
  moneyDisplay.textContent = money.toFixed(2);
  moneyDisplay.classList.add('dollar-effect');

  document.getElementById('mpc').textContent = mpc;
  document.getElementById('mps').textContent = mps;
  document.getElementById('mps-upgrade-cost').textContent = mpsUpgradeCost.toFixed(2);
}

// Function to handle the click event
function handleClick() {
  money += mpc;
  updateDisplay();
}

// Function to handle the save event
function handleSave() {
  const dataToSave = { money, mpc, mps, mpsUpgradeCost };
  localStorage.setItem('idleMoneyClicker', JSON.stringify(dataToSave));
  alert('Game saved!');
}

// Function to handle the load event
function handleLoad() {
  const savedData = JSON.parse(localStorage.getItem('idleMoneyClicker'));
  if (savedData) {
    money = savedData.money;
    mpc = savedData.mpc;
    mps = savedData.mps;
    mpsUpgradeCost = savedData.mpsUpgradeCost;
    updateDisplay();
    alert('Game loaded!');
  } else {
    alert('No saved data found.');
  }
}

// Function to upgrade MPS
function buyMPSUpgrade() {
  if (money >= mpsUpgradeCost) {
    money -= mpsUpgradeCost;
    mps += mpsUpgradeValue;
    mpsUpgradeCost = Math.ceil(mpsUpgradeCost * mpsUpgradeMultiplier);
    updateDisplay();
  } else {
    alert('Insufficient funds to buy MPS upgrade.');
  }
}

// Function to calculate and update money per second (MPS)
function updateMPS() {
  setInterval(() => {
    money += mps;
    updateDisplay();
  }, 1000);
}

// Event listeners
document.getElementById('click-btn').addEventListener('click', handleClick);
document.getElementById('save-btn').addEventListener('click', handleSave);
document.getElementById('load-btn').addEventListener('click', handleLoad);
document.getElementById('mps-upgrade-btn').addEventListener('click', buyMPSUpgrade);

// Start updating MPS
updateMPS();

// Initial display update
updateDisplay();
