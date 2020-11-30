//call all digits
let tens = document.querySelector('#secondTens');
let ones = document.getElementById('secondOnes');
let msHuns = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

//add buttons to start and reset
let start = document.createElement('button')
start.textContent="Start!"
start.style.Backgroundcolor = 'limegreen'
let reset = document.createElement('button')
reset.textContent="reset"

document.querySelector('body').appendChild(start);
document.querySelector('body').appendChild(reset);



function count (){
    if(parseInt(msTens.textContent)<9){
        msTens.textContent = parseInt(msTens.textContent)+1
    }
    else if(parseInt(msTens.textContent)===9 && parseInt(msHuns.textContent)<9){
        msTens.textContent = 0;
        msHuns.textContent = parseInt(msHuns.textContent)+1
    }
    else if(parseInt(msTens.textContent)===9 && parseInt(msHuns.textContent)===9 && parseInt(ones.textContent)<9){
        msTens.textContent=0;
        msHuns.textContent = 0;
        ones.textContent = parseInt(ones.textContent)+1;
    }
    else if(parseInt(msTens.textContent)===9 && parseInt(msHuns.textContent)===9 && parseInt(ones.textContent)===9 && parseInt(tens.textContent)<1){
        msTens.textContent=0;
        msHuns.textContent=0;
        ones.textContent=0;
        tens.textContent = 1;
        window.clearInterval(interval);
    }
    else{
        console.log('finished')
        window.clearInterval(interval)
    }
}
let interval = window.setInterval(count, 10)


    