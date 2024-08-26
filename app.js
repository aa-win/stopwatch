const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const continueBtn = document.querySelector(".continue");

let seconds = 0, minutes = 0, hours = 0;

const startTime = () =>{
    seconds += 1;
    if(seconds === 60){
    seconds = 0;
    minutes += 1;

    if(minutes === 60){
    minutes = 0;
    hours += 1;
}
} 
const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
const hourText = hours < 10 ? "0" + hours.toString() : hours;
stopwatch.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let intervalId;
    startBtn.addEventListener("click", ()=>{
    clearInterval(intervalId);
    seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTime, 1000);
});

pauseBtn.addEventListener("click", ()=>{
    clearInterval(intervalId);
});
continueBtn.addEventListener("click", ()=>{
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);
});
// restartBtn.addEventListener("click", ()=>{
// });