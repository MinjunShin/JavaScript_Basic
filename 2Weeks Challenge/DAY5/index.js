import "./styles.css";
const clock = document.querySelector(".d-dayClock"),
  clockDesc = clock.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const d_Day = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  let remain_Time = (d_Day - date) / 1000;
  const isArrived = d_Day - date < 0 ? true : false;
  if (isArrived) {
    remain_Time = Math.abs(remain_Time);
  }
  const second = Math.floor(remain_Time % 60);
  const minutes = Math.floor((remain_Time / 60) % 60);
  const hour = Math.floor((remain_Time / 60 / 60) % 24);
  const day = Math.floor(remain_Time / 60 / 60 / 24);
  //const day = Math.floor((d_DayTime - currentTime) / 1000 / 60 / 60 / 24);
  //const tmp_hour = d_Day.getHours() - date.getHours()
  //const hour = tmp_hour < 0? 24 + tmp_hour : tmp_hour;
  //const minutes = 60 - date.getMinutes();
  //const second = 60 - date.getSeconds();

  clockDesc.innerText = `${remain_Time} \n D-Day ${
    isArrived ? `+` : `-`
  } ${day}d ${hour < 10 ? `0${hour}` : hour}hour ${
    minutes < 10 ? `0${minutes}` : minutes
  }min ${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
