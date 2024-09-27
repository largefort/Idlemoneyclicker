// Game state variables
let money = 0;
let products = 0;
let workers = 0;

// DOM element variables
const { moneyElement, productsElement, workersElement, produceButton, sellButton, hireButton, saveButton, loadButton, backgroundMusic } = document;

// Load game state from local storage
function loadGameState() {
  money = parseInt(localStorage.getItem("money")) ?? money;
  products = parseInt(localStorage.getItem("products")) ?? products;
  workers = parseInt(localStorage.getItem("workers")) ?? workers;

  updateGameState();
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
  animateValue(moneyElement, money);
  animateValue(productsElement, products);
  animateValue(workersElement, workers);
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
[produceButton, sellButton, hireButton, saveButton, loadButton].forEach(button => {
  button.addEventListener("click", () => {
    if (button === produceButton) {
      produce(1);
    } else if (button === sellButton) {
      sell();
    } else if (button === hireButton) {
      hireWorker();
    } else if (button === saveButton) {
      saveGameState();
    } else if (button === loadButton) {
      loadGameState();
    }
  });
});

// Load game state, start playing music, and start production and earning
loadGameState();
backgroundMusic.play();
startProduction();
startEarning();

// Animate a DOM element's value from its current value to a new value
const animateValue = (element, newValue) => {
  const formatter = new Intl.NumberFormat("en-US", { notation: "compact" });

  const startValue = parseInt(element.textContent.replace(/,/g, ""));
  const endValue = parseInt(newValue);

  const duration = 1000; // 1 second
  const startTime = new Date().getTime();
  const endTime = startTime + duration;

  function update() {
    const currentTime = new Date().getTime();
    const remainingTime = Math.max(endTime - currentTime, 0);
    const elapsedTime = duration - remainingTime;
    const currentValue = Math.round(startValue + (endValue - startValue) * elapsedTime / duration);
    element.textContent = formatter.format(currentValue);

    if (currentTime < endTime) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
};

// Function to enter fullscreen mode
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
