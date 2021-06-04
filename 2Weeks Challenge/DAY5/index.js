const clock = document.querySelector(".d-dayClock"),
  clockDesc = clock.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const d_Day = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  const d_DayTime = d_Day.getTime(),
    currentTime = date.getTime();
  const day = Math.floor((d_DayTime - currentTime) / 1000 / 60 / 60 / 24 + 1);
  const hour = 24 - date.getHours();
  const minutes = 60 - date.getMinutes();
  const second = 60 - date.getSeconds();
  clockDesc.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}hour ${
    minutes < 10 ? `0${minutes}` : minutes
  }min ${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
