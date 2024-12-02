var container = document.querySelector('.container');
var inside = document.querySelector('.inside');


function moveOn(){
    let pos = 0;
    const id = setInterval(frame,)
    function frame(){
        if(pos == 400){
            clearInterval();
        }
        else{
            pos++;
            inside.style.top = pos+ 'px';
            inside.style.left = pos+ 'px';
        }
        
    }
}
