let input=document.getElementById('input');
let btn=document.getElementById('btn');
let wrng=document.querySelector('.wrng');
let guesses=document.getElementById('guesses')

let ans=Math.floor(Math.random()*100)+1;
console.log(ans)

let numguesses=0
btn.addEventListener('click',function(){
    gauessessNumber();
})
function gauessessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML='Enter between 1 to 100';
    }
    else{
        numguesses ++;
        guesses.innerHTML='No of guess : '+numguesses
        if( input.value>ans){
            wrng.innerHTML="You guessed to high : "
            input.value=''
        }
        else if(input.value<ans){
            wrng.innerHTML='you Guess to low : '
            input.value=''
        }

        else{
            wrng.innerHTML='congratulation you guess correct No '
            setTimeout(()=>{
                resetGame();
            },5000)
        }

    }
}

function resetGame(){
    numguesses=0;
    ans=Math.floor(Math.random()*100)+1;
    input.value=''
    btn.disabled=false;
    guesses.innerHTML='No of Guesses : 0'
}
