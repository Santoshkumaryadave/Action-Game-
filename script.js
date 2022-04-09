score=0;
cross= true;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');
document.onkeydown = function(e){
    console.log("the keyCode is:",e.keyCode);
    if(e.keyCode==38){
     men= document.querySelector('.men');
     men.classList.add('animatemen');
     setTimeout(() => {
         men.classList.remove('animatemen')
     }, 800);
    }
    if(e.keyCode==39){
        men= document.querySelector('.men');
        menx= parseInt (window.getComputedStyle(men, null).getPropertyValue('left')) ;
        men.style.left = menx +112 + "px"
       }
       if(e.keyCode==37){
        men= document.querySelector('.men');
        menx= parseInt (window.getComputedStyle(men, null).getPropertyValue('left')) ;
        men.style.left =( menx - 112 )+ "px"
       }
       if(e.keyCode==13){
        abstacle = document.querySelector('.abstacle');
        abstacle.classList.add('abstacleAni');
        mager = document.querySelector('.mager');
        mager.classList.add('mabstacleAni');
        audio.play();
       }
}

setInterval(() => {
    men= document.querySelector('.men');
    gameover = document.querySelector('.gameover');
    abstacle = document.querySelector('.abstacle');
    mager = document.querySelector('.mager');

    dx= parseInt (window.getComputedStyle(men, null).getPropertyValue('left')) ;
    dy= parseInt (window.getComputedStyle(men, null).getPropertyValue('top'));
    
    ox= parseInt (window.getComputedStyle(abstacle, null).getPropertyValue('left'));
    oy= parseInt (window.getComputedStyle(abstacle, null).getPropertyValue('top'));

    mx= parseInt (window.getComputedStyle(mager, null).getPropertyValue('left'));
    my= parseInt (window.getComputedStyle(mager, null).getPropertyValue('top'));
 
    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);

    offsetX1= Math.abs(dx-mx);
    offsetY1= Math.abs(dy-my);
    if(offsetX< 70 && offsetY< 100){
        gameover.innerHTML = 'Game Over';
        abstacle.classList.remove('abstacleAni');
        mager.classList.remove('mabstacleAni');
        audiogo.play(),
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX1< 100 && offsetY1< 50){
        gameover.innerHTML = 'Game Over';
        abstacle.classList.remove('abstacleAni');
        mager.classList.remove('mabstacleAni');
        audiogo.play(),
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if( offsetX< 125 && cross){
        score+=10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross= true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat( window.getComputedStyle(abstacle, null).getPropertyValue('animation-duration'));
            newDur= aniDur - 0.1;
            abstacle.style.animationDuration = newDur + "s" ;
        }, 500);
    }
    else if( offsetX1< 125 && cross){
        score+=10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross= true
        }, 1000);
        setTimeout(() => {
            maniDur = parseFloat( window.getComputedStyle(mager, null).getPropertyValue('animation-duration'));
            mnewDur= maniDur -0.1;
            mager.style.animationDuration = mnewDur + "s" ;
        }, 500);
    }
   
}, 10);
function updateScore(score){
    scoreCount.innerHTML ="Your Score:" + score;
}


