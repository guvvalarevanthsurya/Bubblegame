var score=0;
var time=30;
var hitvalue=0;
var highscore=0;
var overaudio=document.querySelector("#overaudio");
var wrongbuzzer=document.querySelector("#wrongbuzzer")
var successaudio=document.querySelector("#successaudio");
var highscoreaudio=document.querySelector("#highscoreaudio");
var bubbles=document.querySelector("#bubbles");
var button=document.querySelector("#button");
function bubbleMake(){
    var clutter="";
    for (var i=0;i<=209;i++){
        let num=Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${num}</div>`
}
    document.querySelector("#bubbles").innerHTML=clutter;

}
function runTime(){
    var timeinterval=setInterval(function(){
        if (time>0){
            time--;
            document.querySelector("#timeval").innerHTML=time
        }
        else
        {
           if (score>highscore){
                document.querySelector("#beat").innerHTML="Yay!You beated the highscore"
                  highscore=score;
                  highscoreaudio.play();
                  console.log("hii");
            }
            else
            {
                document.querySelector("#beat").innerHTML=""
                overaudio.play();
                
            }
            
            document.querySelector("#gameover h2").innerHTML=`Your score is ${score}`;
            document.querySelector("#highscore").innerHTML=highscore;
            clearInterval(timeinterval);
            document.querySelector("#bubbles").style.display="none";
            document.querySelector("#gameover").style.display="flex";
        }
        },
        1000)
}
function hitVal(){
    hitvalue=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitvalue;
}
function scoreIncrease(){
    score+=10;
    document.querySelector("#scoreval").innerHTML=score;
}

bubbles.addEventListener("click",(dets)=>{
var bubbleval=Number(dets.target.textContent);
if (bubbleval==hitvalue){
    if (successaudio.paused===true)
        {
            successaudio.play();
        }
    else{
        successaudio.pause();
        successaudio.currentTime=0;
        successaudio.play();
    }
    scoreIncrease();
    bubbleMake();
    hitVal();
}
else{
    if (wrongbuzzer.paused===true)
    {
        wrongbuzzer.play();
    }
    else
    {
        wrongbuzzer.pause();
        wrongbuzzer.currentTime=0;
        wrongbuzzer.play();
    }
}
})
button.addEventListener("click",function(){
    document.querySelector("#bubbles").style.display="flex";
    document.querySelector("#gameover").style.display="none";
    time=30;
    score=0;
    document.querySelector("#scoreval").innerHTML="0";
    runTime();
    bubbleMake();
})

bubbleMake();
hitVal();
runTime();
