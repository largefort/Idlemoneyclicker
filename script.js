// Game state variables
let money = 0;
let products = 0;
let workers = 0;

// DOM element variables
const moneyElement = document.getElementById("money");
const productsElement = document.getElementById("products");
const workersElement = document.getElementById("workers");
const produceButton = document.getElementById("produceButton");
const sellButton = document.getElementById("sellButton");
const hireButton = document.getElementById("hireButton");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const backgroundMusic = document.getElementById("backgroundMusic");

// Load game state from local storage
function loadGameState() {
  if (localStorage.getItem("money")) {
    money = parseInt(localStorage.getItem("money"));
    moneyElement.textContent = money.toLocaleString('en-US');
  }
  if (localStorage.getItem("products")) {
    products = parseInt(localStorage.getItem("products"));
    productsElement.textContent = products.toLocaleString('en-US');
  }
  if (localStorage.getItem("workers")) {
    workers = parseInt(localStorage.getItem("workers"));
    workersElement.textContent = workers.toLocaleString('en-US');
  }
  alert("Game loaded!");
}

// Save game state to local storage
function saveGameState() {
  localStorage.setItem("money", money);
  localStorage.setItem("products", products);
  localStorage.setItem("workers", workers);
  alert("Game saved!");
}

// Update game state and UI with new values
function updateGameState() {
  animateValue(moneyElement, money.toLocaleString('en-US'));
  animateValue(productsElement, products.toLocaleString('en-US'));
  animateValue(workersElement, workers.toLocaleString('en-US'));
}

// Produce products
function produce(amount) {
  products += amount;
  updateGameState();
}

// Sell products
function sell() {
  if (products > 0) {
    products--;
    money += 10;
    updateGameState();
  }
}

// Hire a worker
function hireWorker() {
  if (money >= 100) {
    money -= 100;
    workers++;
    updateGameState();
  }
}

// Function to produce products over time
function startProduction() {
  setInterval(() => {
    produce(workers);
  }, 1000);
}

// Function to earn money over time
function startEarning() {
  setInterval(() => {
    money += workers * 10;
    updateGameState();
  }, 3000);
}

// Event listeners for buttons
produceButton.addEventListener("click", () => produce(1));
sellButton.addEventListener("click", sell);
hireButton.addEventListener("click", hireWorker);
saveButton.addEventListener("click", saveGameState);
loadButton.addEventListener("click", loadGameState);

// New Event Listener for Mobile Mode
const mobileMode = document.getElementById("mobileMode");
const mobileModeButton = document.getElementById("mobileModeButton");
mobileModeButton.addEventListener("click", function() {
  mobileMode.style.display = mobileMode.style.display === "block" ? "none" : "block";
});

// Adjust layout for mobile or desktop
function adjustLayout() {
  const desktopContainer = document.querySelector(".desktop-container");
  const mobileContainer = document.querySelector(".mobile-container");

  if (window.innerWidth > 600) {
    desktopContainer.style.display = "block";
    mobileContainer.style.display = "none";
  } else {
    desktopContainer.style.display = "none";
    mobileContainer.style.display = "block";
  }
}

// Listen for window resize events to adjust layout
window.addEventListener("resize", adjustLayout);

// Load game state, start playing music, and start production and earning
loadGameState();
backgroundMusic.play();
startProduction();
startEarning();
