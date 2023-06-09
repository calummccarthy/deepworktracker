let dates = []
// This gets the hours by the button clicked, parses it and spits out e.g "2HRS"
function add(hours) {
    const elem = document.getElementById("number").innerHTML;
    var hrs = parseFloat(hours);
    var num = parseFloat(elem);
    document.getElementById("number").innerText = num + hrs;
}
// Declaring date variables for create() function
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

// This creates a string e.g; "06/05/23 : 1HR"
// Addeds it to a array of dates, then added to HTML page
function create(time) {
    var list = date + '  :  ' + time;
    dates.push(list);
    let li = document.createElement('li');
    li.setAttribute("class", "prev_hrs");
    li.innerHTML = (list);
    document.getElementById('load_list').appendChild(li);
}
// Slices dates to get only the hours, then finds the average
function avg() {
    let sum = 0;
    for (let i=0; i < dates.length; i++) {
        let cur_date = dates[i];
        let number = parseFloat(cur_date.slice(14, 17));
        sum += number;
    }

    average = sum / dates.length;

    let btn1 = document.getElementById("average");
    btn1.innerHTML = average;
}

const timeDisplay = document.getElementById("timer_num");
const startBtn = document.getElementById("start_btn");
const pauseBtn = document.getElementById("pause_btn");
const resetBtn = document.getElementById("reset_btn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}


function jump(id) {
    let notepad = document.getElementById(id);
    notepad.classList.add('jump-animation');
    setTimeout(function() {
        notepad.classList.remove('jump-animation');
    }, 2000)
}

function openBook() {
    let bookOpened = document.getElementById('book-opened');
    let bookClosed = document.getElementById('book-closed');
    bookClosed.classList.add('vanish');
    bookOpened.classList.remove('vanish');
    setTimeout(function() {
        bookClosed.classList.remove('vanish');
        bookOpened.classList.add('vanish');
    }, 2000)
}