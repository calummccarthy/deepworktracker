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

const time_el = document.getElementById("timer_num");
const start = document.getElementById("start_btn")
const stop = document.getElementById("pause_btn")
const reset = document.getElementById("reset_btn")

let seconds = 7400;
let interval = null;

function timer() {
    seconds++;

    // Format our time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor(seconds - (hrs / 3600) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs
    
    time_el.innerText = "$(hrs):$(mins):$(secs)";
}

timer()