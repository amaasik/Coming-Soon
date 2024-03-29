const countdown = document.querySelector('.countdown');

// Set Launch date (ms)
const launchDate = new Date('Jan 1, 2024 13:00:00').getTime();

//update every second
const intvl = setInterval(() =>{
// get todays date and tume(ms)
const now = new Date().getTime();

//Distance from now to the launch date
const distance = launchDate - now;

//Time calculations
const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance %  (1000*60*60*24)) / (1000*60*60));
const mins = Math.floor((distance %  (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance %  (1000*60)) / 1000);

//Display result
countdown.innerHTML =`
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

//if launch dte passed
if(distance < 0){
    //stop countdown
    clearInterval(intvl);
    //style and output text
    countdown.getElementsByClassName.color ='#17a2b8'
    countdown.innerHTML = 'Launched!'
}
}, 1000);