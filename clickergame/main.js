clicks = 0;

document.getElementById('clickerbutton').onclick = function(){
    clicks += 1;
    document.getElementById('clickerbutton').innerHTML = clicks;
}