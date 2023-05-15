let dates = []

function add(hours) {
    const elem = document.getElementById("number").innerHTML;
    var hrs = parseFloat(hours);
    var num = parseFloat(elem);
    document.getElementById("number").innerText = num + hrs;
}
  
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


function create(time) {
    var list = date + '  :  ' + time;
    dates.push(list);
}

function load() {
    for (let i=0; i < dates.length; i++) {
        let li = document.createElement('li')
        li.setAttribute("class", "prev_hrs")
        li.innerHTML = (dates[i]);
        document.body.appendChild(li);
    }
}

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