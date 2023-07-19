// Game state variables
let money = 0;
let uploadCount = 0;
let uploadSpeed = 1;
let upgradeCost = 10;

// Function to upload a file
function upload() {
  uploadCount += uploadSpeed;
  updateUI();
}

// Function to buy an upload speed upgrade
function buyUpgrade() {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    uploadSpeed++;
    upgradeCost *= 2;
    updateUI();
  }
}

// Function to update the UI with the current game state
function updateUI() {
  document.getElementById("upload-count").textContent = uploadCount;
  document.getElementById("upload-speed").textContent = uploadSpeed;
  document.getElementById("money").textContent = money;
  document.getElementById("upgrade-cost").textContent = upgradeCost;
}

// Function to handle income generation
function generateIncome() {
  money += uploadCount;
  updateUI();
}

// Start generating income every second
setInterval(generateIncome, 1000);
