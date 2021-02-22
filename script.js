

timer = 10;
timerEl = document.getElementById("test");

countDown()
{
    setInterval(() => {
        timer--;
        rendertext();
    }, 1000);
}

rendertext()
{
    timerEl.innerHTML = `Time left is: ${timer}`;
}