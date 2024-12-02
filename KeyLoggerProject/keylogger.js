let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
const strt = document.querySelector('.strt-btn');
const stp = document.querySelector('.stp-btn');


strt.addEventListener("click",() => {
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    strt.disabled = true;
    stp.disabled = false;
})
stp.addEventListener("click",() => {
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    start.textContent = " ";
    stop.textContent = " ";
    strt.disabled = false;
    stp.disabled = true;
})

function handleDown(e){
    if(e.key == "SPACE"){
        start.textContent = `key space pressed down`;
        stop.textContent = `key is pressed`;
    }
    else{
        start.textContent = `key ${e.key} pressed down`
    stop.textContent = "key is pressed";
    }
}
function handleUp(e){
    start.textContent = `key ${e.key} pressed up`
    stop.textContent = "key is up";
}
