const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${
        minutes < 10 ? `0${hours}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}
//초가 10보다 작으면 ?(=if와 같은 성질) 초에 0을 추가!  :(=그렇지않다면) 원래대로


function init() {
    getTime();
    setInterval(getTime,1000);
}

init();