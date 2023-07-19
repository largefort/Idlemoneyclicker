let earnings = 0;
let cameraQuality = 1;
let streamingSoftware = 1;
let viewerInteraction = 1;
let streamerName = "";

// Check if the game data exists in localStorage
const savedData = JSON.parse(localStorage.getItem("idleStreamerData"));

// Load existing data or show the setup page
if (savedData) {
    loadGameData(savedData);
} else {
    showSetupPage();
}

// Function to create a new streamer and start the game
const createStreamer = () => {
    streamerName = document.getElementById("streamerName").value;
    if (streamerName.trim() === "") {
        alert("Please enter a valid streamer name.");
        return;
    }
    hideSetupPage();
    showGamePage();
    saveGameData();
};

const showSetupPage = () => {
    document.getElementById("setupPage").style.display = "block";
    document.getElementById("gamePage").style.display = "none";
};

const hideSetupPage = () => {
    document.getElementById("setupPage").style.display = "none";
};

const showGamePage = () => {
    document.getElementById("gamePage").style.display = "block";
};

const updateEarningsDisplay = () => {
    document.getElementById('earnings').textContent = earnings.toFixed(2);
};

const clickStream = () => {
    earnings += viewerInteraction;
    updateEarningsDisplay();
    saveGameData();
};

const upgradeCamera = () => {
    const cameraCost = 10 * cameraQuality;
    if (earnings >= cameraCost) {
        earnings -= cameraCost;
        cameraQuality++;
        document.getElementById('cameraQuality').textContent = cameraQuality;
        document.getElementById('cameraCost').textContent = (10 * cameraQuality).toFixed(2);
        updateEarningsDisplay();
        saveGameData();
    } else {
        alert("Not enough earnings to upgrade camera quality!");
    }
};

const upgradeSoftware = () => {
    const softwareCost = 50 * streamingSoftware;
    if (earnings >= softwareCost) {
        earnings -= softwareCost;
        streamingSoftware++;
        document.getElementById('streamingSoftware').textContent = streamingSoftware;
        document.getElementById('softwareCost').textContent = (50 * streamingSoftware).toFixed(2);
        updateEarningsDisplay();
        saveGameData();
    } else {
        alert("Not enough earnings to upgrade streaming software!");
    }
};

const upgradeInteraction = () => {
    const interactionCost = 100 * viewerInteraction;
    if (earnings >= interactionCost) {
        earnings -= interactionCost;
        viewerInteraction++;
        document.getElementById('viewerInteraction').textContent = viewerInteraction;
        document.getElementById('interactionCost').textContent = (100 * viewerInteraction).toFixed(2);
        updateEarningsDisplay();
        saveGameData();
    } else {
        alert("Not enough earnings to upgrade viewer interaction!");
    }
};

const saveGameData = () => {
    const gameData = {
        earnings,
        cameraQuality,
        streamingSoftware,
        viewerInteraction,
        streamerName,
    };
    localStorage.setItem("idleStreamerData", JSON.stringify(gameData));
};

const loadGameData = (data) => {
    earnings = data.earnings;
    cameraQuality = data.cameraQuality;
    streamingSoftware = data.streamingSoftware;
    viewerInteraction = data.viewerInteraction;
    streamerName = data.streamerName;
    document.getElementById("streamerName").value = streamerName;

    updateEarningsDisplay();
    document.getElementById('cameraQuality').textContent = cameraQuality;
    document.getElementById('cameraCost').textContent = (10 * cameraQuality).toFixed(2);
    document.getElementById('streamingSoftware').textContent = streamingSoftware;
    document.getElementById('softwareCost').textContent = (50 * streamingSoftware).toFixed(2);
    document.getElementById('viewerInteraction').textContent = viewerInteraction;
    document.getElementById('interactionCost').textContent = (100 * viewerInteraction).toFixed(2);

    showGamePage();
};
