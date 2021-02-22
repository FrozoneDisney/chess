
var countdown;
var timer = 10;
var timerEl = document.getElementById("test");
var container = document.getElementById("container");
var button = document.getElementById("start");
var audio = new Audio("sounds/amogus.mp3");
button.onclick = countDown;


rendertext();

function countDown()
{
    if(!countdown){
        countdown = setInterval(() => {
            timer--;
            rendertext();
        }, 1000);
    }
}

function rendertext()
{
    timerEl.innerHTML = `Time left is: ${timer}`;
    if(timer == 0)
    {
        clearInterval(countdown);
        audio.play();

    }
}