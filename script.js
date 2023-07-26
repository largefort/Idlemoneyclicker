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

// Load game state, start playing music, and start production and earning

loadGameState();

backgroundMusic.play();

startProduction();

startEarning();

// Animate a DOM element's value from its current value to a new value

function animateValue(element, newValue) {

  const startValue = parseInt(element.textContent.replace(/,/g, ''));

  const endValue = parseInt(newValue.replace(/,/g, ''));

  const duration = 1; // per seconds

  const startTime = new Date().getTime();

  const endTime = startTime + duration;

  function update() {

    const currentTime = new Date().getTime();

    const remainingTime = Math.max(endTime - currentTime, 0);

    const elapsedTime = duration - remainingTime;

    const currentValue = Math.round(

      startValue + (endValue - startValue) * elapsedTime / duration

    );

    element.textContent = currentValue.toLocaleString('en-US', { notation: "compact" });

    if (currentTime < endTime) {

      requestAnimationFrame(update);

    }

  }

  requestAnimationFrame(update);

}

function enableFullscreen() {

  /*

  This function allows players to enter fullscreen mode

  */

  try {

    const elem = document.documentElement;

    if (elem.requestFullscreen) {

      elem.requestFullscreen();

    } else if (elem.webkitRequestFullscreen) { /* Safari */

      elem.webkitRequestFullscreen();

    } else if (elem.msRequestFullscreen) { /* IE11 */

      elem.msRequestFullscreen();

    }

  } catch (error) {

    console.error(error);

  }

}
