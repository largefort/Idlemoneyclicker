// Game variables
let money = 0;
let mpc = 1;
let mps = 0;

// Load data from local storage if available
const savedData = JSON.parse(localStorage.getItem('idleMoneyClicker'));
if (savedData) {
  money = savedData.money;
  mpc = savedData.mpc;
  mps = savedData.mps;
}

// Function to update the displayed values
function updateDisplay() {
  document.getElementById('money').textContent = money;
  document.getElementById('mpc').textContent = mpc;
  document.getElementById('mps').textContent = mps;
}

// Function to handle the click event
function handleClick() {
  money += mpc;
  updateDisplay();
}

// Function to handle the save event
function handleSave() {
  const dataToSave = { money, mpc, mps };
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
    updateDisplay();
    alert('Game loaded!');
  } else {
    alert('No saved data found.');
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

// Start updating MPS
updateMPS();

// Initial display update
updateDisplay();
