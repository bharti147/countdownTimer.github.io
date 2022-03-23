const newyeardate="1 Jan 2023";
const daysel=document.getElementById('days');
const hoursel =document.getElementById('hours');
const minutesel=document.getElementById('minutes');
const secondsel=document.getElementById('seconds');
function countdown(){
    const newdate=new Date(newyeardate);
    const currentdate=new Date();
    const totalseconds=(newdate-currentdate)/1000;
  
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds / 60) % 60;
    const seconds=Math.floor(totalseconds) % 60;
//console.log(days, hours, minutes, seconds);
daysel.innerHTML=formattime(days);
hoursel.innerHTML=formattime(hours);
minutesel.innerHTML=formattime(minutes);
secondsel.innerHTML=formattime(seconds);

function formattime(time){
   return time < 10 ? (`0${time}`) : time;}

}
countdown();
 
setInterval(countdown,1000);