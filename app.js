const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

setInterval(tick, 1)
    

function tick() {
 



const date = new Date();

timeElement.innerHTML =
    pad(date.getHours(), 2)  + ":" +
    pad(date.getMinutes(), 2)  + ":" +
    pad(date.getSeconds(), 2) ;

dateElement.innerHTML =
    pad(date.getDate(), 2)  + ":" +
    pad(date.getMonth(), 2)  + ":" +
    pad(date.getFullYear(), 2) ;
}
function pad(num, size) {
    num = num.toString();
    while(num.length <size) {
        num = "0" + num;  
    }
    return num;
}