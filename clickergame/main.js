let clicks = Number(localStorage.getItem('clicks')) || 0

document.getElementById('clickerbutton').innerHTML = clicks;

document.getElementById('clickerbutton').onclick = function(){
    clicks += 1;
    document.getElementById('clickerbutton').innerHTML = clicks;
    localStorage.setItem('clicks', clicks);
}

document.getElementById('resetbutton').onclick = function(){
    clicks = 0;
    document.getElementById('clickerbutton').innerHTML = clicks;
    localStorage.setItem('clicks', clicks);
}