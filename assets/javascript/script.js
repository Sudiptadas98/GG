score = 0;
cross= true;

audio = new Audio('assets/sounds/music.mp3');
audiogo = new Audio('assets/sounds/md.mp3');
// animation = document.querySelector('.obstacleAni');
play = document.querySelector('.play');
play.addEventListener("click", () => {
    obstacle = document.querySelector('.obstacle');
    obstacle.style.animation = "obstacle 4s linear infinite";
    audio.play();
    play.style.visibility = 'hidden';
})
// function gameReset(){
//     score = 0;
//     updateScore(score);
//     gameOver.style.visibility = 'hidden';
//     c1d.style.visibility = 'hidden';
//     impw.style.visibility = 'hidden';
//     c1.style.visibility = 'visible';
//     obstacle.style.visibility = 'visible';
// }
playagain = document.querySelector('.playagain');
playagain.addEventListener("click", gameReset);
// audio.play();
// setTimeout(() => {
//     audio.play();
// }, 1000);
// if(btn){

// const btn = document.querySelector('.unmuteButton');
// btn.addEventListener("click", () => {
//     audio.play();
// })
document.onkeydown = function (e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==32){
        c1 = document.querySelector('.c1');
        c1.classList.add('animatec1');
        setTimeout(() => {
            c1.classList.remove('animatec1')
        }, 900);
    }
}


    

setInterval(() => {
    c1 = document.querySelector('.c1');
    c1d = document.querySelector('.c1d');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    impw = document.querySelector('.impw');
    finalscore = document.querySelector('.finalscore');
    // c1.style.visibility = 'visible';

    cx = parseInt(window.getComputedStyle(c1, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(c1, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(cx-ox);
    offsetY = Math.abs(cy-oy);
    console.log(offsetX, offsetY)
    if(offsetX< 110 && offsetY< 53){
        c1.style.visibility = 'hidden';
        gameOver.style.visibility = 'visible';
        playagain.style.visibility = 'visible';
        // obstacle.classList.remove('obstacleAni')
        obstacle.style.animation = "";
        obstacle.style.visibility = 'hidden';
        c1d.style.visibility = 'visible';
        impw.style.visibility = 'visible';
        finalscore.style.visibility = 'visible';
        final();
        score = 0;
        updateScore(score);
        scoreCont.style.visibility = 'hidden';
        audiogo.play();
        setTimeout(() => {
            // audiogo.pause();
            audio.pause();
        }, 10);
        
    }
    else if((offsetX< 20 && offsetY> 300) && cross){
        score+=1;
        updateScore(score);
        cross= false;
        setTimeout(() => {
            cross= true; 
        }, 1000);
        setTimeout(() => {
            aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur -0.02;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur) 
        }, 700);
        
    }
}, 100);


function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score
}
function final() {
    finalscore.innerHTML = " Final Score: " + score
}
function gameReset(){
    // score = 0;
    // updateScore(score);
    gameOver.style.visibility = 'hidden';
    c1d.style.visibility = 'hidden';
    impw.style.visibility = 'hidden';
    c1.style.visibility = 'visible';
    obstacle.style.visibility = 'visible';
    scoreCont.style.visibility = 'visible';
    playagain.style.visibility = 'hidden';
    finalscore.style.visibility = 'hidden';
    obstacle.style.animation = "obstacle 4s linear infinite";
    audio.currentTime = 0;
    audio.play();
    // setInterval();
}