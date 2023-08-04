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
    draw();
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

// Other upgrade handlers would be similar...

// Rest of the code...
