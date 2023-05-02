function add(hours) {
    const elem = document.getElementById("number").innerHTML;
    var hrs = parseFloat(hours);
    var num = parseFloat(elem);
    document.getElementById("number").innerText = num + hrs;
}
  
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

function create(time) {
    var list = document.createElement('li');
    list.textContent = date +' ' + time;
    document.body.appendChild(list);
}