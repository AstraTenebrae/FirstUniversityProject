

var btn =document.getElementById('hello_world');
var object = document.getElementById('hello_image');

var flag=false;

function playAudio(url) {
 
if (!flag){
  var audio = new Audio(url);

  
  audio.loop=true;
  audio.play();
  flag=true;}

}




var time = Math.random()*5;
var hello_image = document.querySelector('#hello_image');

function setProperty(duration) {
  hello_image.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
  var animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 100);



document.getElementById("hello_image").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Congratulations, you clicked!";
  movement(object);
});
