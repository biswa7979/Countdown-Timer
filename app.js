const newYear= "1 Jan 2022";
const dayEl=document.getElementById('day');
const hourEl=document.getElementById('hour');

const minEl=document.getElementById('min');

const secEl=document.getElementById('sec');


function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();

    const totalSecond=(newYearDate-currentDate)/1000;
    
    const days= Math.floor(totalSecond / 3600 / 24);
    const hours=Math.floor(totalSecond/3600) % 24;
    const mins=Math.floor(totalSecond/60) % 60;
    const sec= Math.floor(totalSecond) % 60;
   console.log(days,hours,mins,sec);

    
    dayEl.innerHTML = (days);
    hourEl.innerHTML = (hours);
    minEl.innerHTML = (mins);
    secEl.innerHTML = (sec);
    
}


countdown();

setInterval(countdown, 1000);
