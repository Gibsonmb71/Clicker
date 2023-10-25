let counter = 0;
let clickMultiplier = 1;
let upgradeCost = 50;
let upgradeCount = 0;

let autoClicks = 1;
let autoClickUpgradeCost = 500;

const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const autoClickUpgradeButton = document.getElementById('autoClickUpgradeButton');
const upgradeCounter = document.getElementById('upgradeCounter');
const clickMultiplierElement = document.getElementById('clickMultiplier');
const autoClicksElement = document.getElementById('autoClicks');

clickButton.addEventListener('click', () => {
    counter += clickMultiplier;
    counterElement.textContent = counter;
});

upgradeButton.addEventListener('click', () => {
    if (counter >= upgradeCost) {
        counter -= upgradeCost;
        upgradeCount++;
        clickMultiplier *= 2;
        upgradeCost *= 2;

        counterElement.textContent = counter;
        upgradeCounter.textContent = `Upgrades: ${upgradeCount}`;
        clickMultiplierElement.textContent = `Click Multiplier: ${clickMultiplier}x`;
        upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
    }
});

autoClickUpgradeButton.addEventListener('click', () => {
    if (counter >= autoClickUpgradeCost) {
        counter -= autoClickUpgradeCost;
        autoClicks *= 2;
        autoClickUpgradeCost *= 2;

        counterElement.textContent = counter;
        autoClicksElement.textContent = `Autoclicks per Second: ${autoClicks}`;
        autoClickUpgradeButton.textContent = `Autoclick Upgrade (Cost: ${autoClickUpgradeCost})`;

        if (autoClicks === 2) {
            startAutoClicking();
        }
    }
});

function startAutoClicking() {
    setInterval(() => {
        counter += autoClicks * clickMultiplier;
        counterElement.textContent = counter;
    }, 1000);
}
