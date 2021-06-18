document.addEventListener('DOMContentLoaded', function(){

    const images = document.querySelectorAll(".slider img");
    const slider = document.querySelector(".slider");
    
    let count = 0;
    let width;
    
    function init(){
        width = document.querySelector('.slider__wrapper').offsetWidth;
        width = document.querySelector('.slider__wrapper').offsetHeight;
        // console.log(width);
        slider.style.width = width * images.length + "px";
        images.forEach(item => {
            item.style.width = width + "px";
            item.style.height =  "auto";
        })
        roll()
    }
    
    window.addEventListener('resize', init);
    init();
    
    function roll(){
        slider.style.transform = `translateX(-${width * count}px)`;
    }
    
    document.querySelector(".slider__next").addEventListener('click', function(){
        if ((count + 1) < images.length){
            count++;
        } else {
            count = 0;
        }
        roll();
    });
    
    document.querySelector(".slider__prev").addEventListener('click', function(){
        if ((count - 1) >= 0){
            count--;
        } else {
            count = images.length - 1;
        }
        roll();
    });
    });


    const count = function () {
        const futureData = new Date('May 10, 2023 10:00:00').getTime();
        const now = new Date().getTime();
        const gap = futureData - now;
        const sec = 1000;
        const min = sec * 60;
        const hour = min * 60;
        const day = hour * 24;
        const gapDays = Math.floor(gap/day);
        const gapHours = Math.floor((gap%day)/hour);
        const gapMin = Math.floor((gap%hour)/min);
        const gapSec = Math.floor((gap%min)/sec);
        document.querySelector('.count_d').innerHTML = gapDays;
        document.querySelector('.count_h').innerHTML = gapHours;
        document.querySelector('.count_m').innerHTML = gapMin;
        document.querySelector('.count_s').innerHTML = gapSec;
    };
    
    document.addEventListener('DOMContentLoaded', function (){
        setInterval(count, 1000);
    });
    