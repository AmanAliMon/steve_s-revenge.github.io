function main(){
const calculatedHeight = (window.innerHeight * 0.9);
document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
});
var character = document.getElementById("character");
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
}
var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
});
var intervalID = setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft == blockLeft && blockTop < calculatedHeight && blockTop > (calculatedHeight - 200)){
        Alert(counter);
        block.style.animation = "none";
        clearInterval(intervalID); // Stop the interval
    }
    else{
        document.getElementById("score").innerText = `score : ${counter}`
    }
}, 1);




document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
}

function init(x){
    document.getElementById("config").toggleAttribute("hidden")
    document.getElementById("game").toggleAttribute("hidden")
    document.getElementById("character").style.backgroundImage = `url('${x}')`

    main();
}
function Alert(co) {
    document.body.innerHTML = `
    <section body>
    <center>
    <h1>Game Over</h1>
    <button onclick="location.reload()">Restart</button>
    </center>
    </section>
    </html>`
}