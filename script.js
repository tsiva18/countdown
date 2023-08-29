const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");




function updateTime(){
    const currentDate=new Date().getDate();
const currentYear= new Date().getFullYear();
const brithDay=new Date(`october 16 ${currentDate+48,currentYear} 00:00:00`);
console.log(brithDay);
const today=new Date();
const diff=brithDay-today
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
//console.log(d+" "+h+" "+m+" "+s);
}

setInterval(updateTime,1000)