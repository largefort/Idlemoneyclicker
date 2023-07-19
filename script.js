// Game variables
let money = 0;
let mpc = 1;
let autoClickerCost = 100;
let autoClickerLevel = 0;

// Load data from local storage if available
const savedData = JSON.parse(localStorage.getItem('idleMoneyClicker'));
if (savedData) {
  money = savedData.money;
  mpc = savedData.mpc;
  autoClickerCost = savedData.autoClickerCost;
  autoClickerLevel = savedData.autoClickerLevel;
}

// Function to update the displayed values
function updateDisplay() {
  const moneyDisplay = document.getElementById('money');
  moneyDisplay.textContent = money.toFixed(2);
  moneyDisplay.classList.add('dollar-effect');

  document.getElementById('mpc').textContent = mpc.toFixed(2);
  document.getElementById('auto-clicker-cost').textContent = autoClickerCost.toFixed(2);
  document.getElementById('auto-clicker-level').textContent = autoClickerLevel;
}

// Function to handle the click event
function handleClick() {
  money += mpc;
  updateDisplay();
}

// Function to handle the buy autoclicker event
function buyAutoClicker() {
  if (money >= autoClickerCost) {
    money -= autoClickerCost;
    autoClickerLevel++;
    autoClickerCost = Math.ceil(autoClickerCost * 1.2);
    updateDisplay();
  } else {
    alert('Insufficient funds to buy Autoclicker.');
  }
}

// Function to simulate autoclicker
function autoclick() {
  money += autoClickerLevel * mpc;
  updateDisplay();
}

// Function to handle the virtual finger touch
function handleFingerTouch(event) {
  const fingerTouch = document.getElementById('finger-touch');
  fingerTouch.style.left = `${event.pageX - 25}px`;
  fingerTouch.style.top = `${event.pageY - 25}px`;
  fingerTouch.style.display = 'block';

  setTimeout(() => {
    fingerTouch.style.display = 'none';
  }, 100);
}

// Event listeners
document.getElementById('click-btn').addEventListener('click', handleClick);
document.getElementById('buy-auto-clicker-btn').addEventListener('click', buyAutoClicker);
document.addEventListener('mousemove', handleFingerTouch);

// AutoClicker simulation
setInterval(autoclick, 1000);

// Initial display update
updateDisplay();
