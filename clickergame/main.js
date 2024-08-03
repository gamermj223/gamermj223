let clicks = Number(localStorage.getItem('clicks')) || 0
let ClickerUpgradeLevel = Number(localStorage.getItem('ClickerUpgradeLevel')) || 0
let ClickerUpgradeCost = Number(localStorage.getItem('ClickerUpgradeCost')) || 10
let clickerMultiplier = Number(localStorage.getItem('clickerMultiplier')) || 1

document.getElementById('clickerbutton').innerHTML = clicks
document.getElementById('clickerupgradebutton').innerHTML = 'Clicker Upgrade ' + ClickerUpgradeLevel + '<br>' + 'Cost - ' + ClickerUpgradeCost


document.getElementById('clickerbutton').onclick = function(){
    clicks += clickerMultiplier
    document.getElementById('clickerbutton').innerHTML = clicks
    localStorage.setItem('clicks', clicks)
}

document.getElementById('giveclicks').onclick = function(){
    clicks += 10000
    document.getElementById('clickerbutton').innerHTML = clicks
}

document.getElementById('resetbutton').onclick = function(){
    clickerMultiplier = 1
    ClickerUpgradeCost = 10
    ClickerUpgradeLevel = 0
    clicks = 0
    document.getElementById('clickerbutton').innerHTML = clicks
    localStorage.setItem('clicks', clicks)
    document.getElementById('clickerupgradebutton').innerHTML = 'Clicker Upgrade ' + ClickerUpgradeLevel + '<br>' + 'Cost - ' + ClickerUpgradeCost
}

document.getElementById('clickerupgradebutton').onclick = function() {
    if (ClickerUpgradeLevel <= 4){
        if (clicks >= ClickerUpgradeCost) { // Check if the player has enough clicks to upgrade
            clicks -= ClickerUpgradeCost // Deduct the cost from the clicks
            ClickerUpgradeLevel += 1 // Increase the upgrade level
            ClickerUpgradeCost *= 2 // Double the cost for the next upgrade
            clickerMultiplier += 1
        }
    }
    // Update the button text to show the new upgrade level and cost
    document.getElementById('clickerupgradebutton').innerHTML = 'Clicker Upgrade ' + ClickerUpgradeLevel + '<br>' + 'Cost - ' + ClickerUpgradeCost
    document.getElementById('clickerbutton').innerHTML = clicks
    localStorage.setItem('ClickerUpgradeLevel', ClickerUpgradeLevel)
    localStorage.setItem('ClickerUpgradeCost', ClickerUpgradeCost)
}