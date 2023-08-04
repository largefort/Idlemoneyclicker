let money = 0;
let moneyPerClick = 1;
let passiveIncome = 0;
let clickerUpgradeCost = 10;
let passiveUpgradeCost = 50;
let doubleIncomeCost = 100;
let superClickerCost = 500;
let doubleIncomeActive = false;
let superClickerActive = false;

// Sounds
let clickSound = new Audio('click.mp3');
let bonusSound = new Audio('bonus.mp3');
let upgradeSound = new Audio('upgrade.mp3');

// Load progress
if (localStorage.getItem('money')) {
    money = Number(localStorage.getItem('money'));
    updateMoneyDisplay();
}

// Save progress every 30 seconds
setInterval(() => {
    localStorage.setItem('money', money);
}, 30000);

document.getElementById('clicker').addEventListener('click', () => {
    let earning = doubleIncomeActive ? moneyPerClick * 2 : moneyPerClick;
    earning = superClickerActive ? earning * 10 : earning;
    money += earning;
    clickSound.play();
    updateMoneyDisplay();
});

// Random bonus
setInterval(() => {
    document.getElementById('bonus').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('bonus').style.display = 'none';
    }, 5000); // Bonus is available for 5 seconds
}, 60000); // Bonus appears every 60 seconds

document.getElementById('bonus').addEventListener('click', () => {
    money += 100; // Bonus money
    bonusSound.play();
    updateMoneyDisplay();
    document.getElementById('bonus').style.display = 'none';
});

// Upgrade handlers
document.getElementById('upgradeClicker').addEventListener('click', () => {
    if (money >= clickerUpgradeCost) {
        money -= clickerUpgradeCost;
        moneyPerClick += 1;
        clickerUpgradeCost *= 2;
        upgradeSound.play();
        updateMoneyDisplay();
        updateButtonLabels();
    }
});

document.getElementById('upgradePassive').addEventListener('click', () => {
    if (money >= passiveUpgradeCost) {
        money -= passiveUpgradeCost;
        passiveIncome += 10;
        passiveUpgradeCost *= 2;
        upgradeSound.play();
        updateMoneyDisplay();
        updateButtonLabels();
    }
});

document.getElementById('doubleIncome').addEventListener('click', () => {
    if (money >= doubleIncomeCost) {
        money -= doubleIncomeCost;
        doubleIncomeActive = true;
        upgradeSound.play();
        updateMoneyDisplay();
        updateButtonLabels();
        setTimeout(() => {
            doubleIncomeActive = false;
        }, 10000); // Double income lasts for 10 seconds
    }
});

document.getElementById('superClicker').addEventListener('click', () => {
    if (money >= superClickerCost) {
        money -= superClickerCost;
        superClickerActive = true;
        upgradeSound.play();
        updateMoneyDisplay();
        updateButtonLabels();
        setTimeout(() => {
            superClickerActive = false;
        }, 10000); // Super clicker lasts for 10 seconds
    }
});

// Passive income
setInterval(() => {
    money += passiveIncome;
    updateMoneyDisplay();
}, 1000); // Increase money by passive income every second

// Update money display
function updateMoneyDisplay() {
    document.getElementById('money').innerHTML = `<i class="fas fa-dollar-sign"></i> You have ${money} dollars.`;
}

// Update button labels
function updateButtonLabels() {
    document.getElementById('upgradeClicker').innerHTML = `<i class="fas fa-arrow-up"></i> Upgrade Clicker (Cost: ${clickerUpgradeCost} dollars)`;
    document.getElementById('upgradePassive').innerHTML = `<i class="fas fa-clock"></i> Upgrade Passive Income (Cost: ${passiveUpgradeCost} dollars)`;
    document.getElementById('doubleIncome').innerHTML = `<i class="fas fa-times"></i> Double Income for 10 Seconds (Cost: ${doubleIncomeCost} dollars)`;
    document.getElementById('superClicker').innerHTML = `<i class="fas fa-rocket"></i> Super Clicker for 10 Seconds (Cost: ${superClickerCost} dollars)`;
}

// On page load, update the button labels
updateButtonLabels();
