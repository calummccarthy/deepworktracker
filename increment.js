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
    var list = date + ' ' + time;
    dates.push(list);
    console.log(dates);
}

function load() {
    for (let i=0; i < dates.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = (dates[0]);
        document.body.appendChild(li);
    }
}