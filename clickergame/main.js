let clicks = Number(localStorage.getItem('clicks')) || 0
let ClickerUpgradeLevel = Number(localStorage.getItem('UpgradeNumber')) || 1
let ClickerUpgradeCost = Number(localStorage.getItem('UpgradePercent')) || 100

document.getElementById('clickerbutton').innerHTML = clicks;
document.getElementById('clickerupgradebutton').innerHTML = 'Clicker Upgrade ' + ClickerUpgradeLevel + '<br>' + 'Cost - ' + ClickerUpgradeCost;


document.getElementById('clickerbutton').onclick = function(){
    clicks += 1
    document.getElementById('clickerbutton').innerHTML = clicks
    localStorage.setItem('clicks', clicks);
}

document.getElementById('giveclicks').onclick = function(){
    clicks += 10000
}

document.getElementById('resetbutton').onclick = function(){
    ClickerUpgradeCost = 100
    ClickerUpgradeLevel = 1
    clicks = 0
    document.getElementById('clickerbutton').innerHTML = clicks
    localStorage.setItem('clicks', clicks)
}

document.getElementById('clickerupgradebutton').onclick = function(){
    if (clicks <= 1000) {
        ClickerUpgradeCost *= 2
    }
    document.getElementById('clickerupgradebutton').innerHTML = 'Clicker Upgrade ' + ClickerUpgradeLevel + '<br>' + 'Cost - ' + ClickerUpgradeCost;
}