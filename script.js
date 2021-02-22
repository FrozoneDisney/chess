
var countdown;
var timer = 10;
var timerEl = document.getElementById("test");
var container = document.getElementById("container");
var button = document.getElementById("start");
var audio = new Audio("sounds/amogus.mp3");
button.onclick = rendertext;




function rendertext()
{
        amogus();
        audio.play();
        container.style.backgroundImage = "url('images/fb8.jpg')";
}

function amogus()
{
        setInterval(() => {
            var h1 = Math.floor(Math.random() * 256).toString(16);
            var h2 = Math.floor(Math.random() * 256).toString(16);
            var h3 = Math.floor(Math.random() * 256).toString(16);
            timerEl.innerHTML = "AMOGUS"
            timerEl.style.color = `#${h1}${h2}${h3}`
        }, 20);
        
        setInterval(() => {
            timerEl.innerHTML = ""
        }, 30);
}