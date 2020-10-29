let inputInterval = document.querySelector("#inInt");
let button = document.querySelector("button");
var interval;
button.onclick = function(){
    interval = inputInterval.value;
    inputInterval.value = "";
    var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var slider = document.querySelector('#slider')
var img = slider.querySelector("img");
var i = 1;
img.src = "images/img/" + images[0];
window.setInterval(function(){
    img.src = "images/img/" + images[i];
i++;
if (i == images.length) {
    i = 0;
}
},interval);
}

Time = new Date();
Hour = Time.getHours();
if(Hour > 5 && Hour < 9){
document.write('<body background="images/background/background1.jpg" text = "1">');
}
else if (Hour > 8 && Hour < 18){
document.write('<body background="images/background/background2.jpg" text = "2">');
}
else if (Hour > 17 && Hour < 21){
document.write('<body background="images/background/background3.jpg" text = "3">');
}
else {
document.write('<body background="images/background/background4.jpg" text = "4">');
}