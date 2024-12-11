
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
  
  document.getElementById('accept-cookies').onclick = function() {
   
    localStorage.setItem('cookiesAccepted', 'true');
   
    document.getElementById('cookie-banner').style.display = 'none';

  }

  


  
document.getElementById('toggle-theme').onclick = function() {
    
    document.body.classList.toggle('dark-mode');
    
   
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggle-theme').textContent = isDarkMode ? '🌞' : '🌙'; 
}


document.getElementById('toggle-theme').onclick = function() {
    
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggle-theme').textContent = isDarkMode ? '🌞' : '🌙';  
    
    
    if (isDarkMode) {
        console.log("Donkere modus geactiveerd.");
        localStorage.setItem('theme', 'dark'); 
    } else {
        console.log("Lichte modus geactiveerd.");
        localStorage.setItem('theme', 'light'); 
    }
}


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggle-theme').textContent = '🌞'; 
    console.log("Donkere modus is ingeschakeld bij het laden van de pagina.");
} else {
    console.log("Lichte modus is ingeschakeld bij het laden van de pagina.");
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }

  
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); 
});

const targetDate = new Date("2025-02-10T00:00:00");function updateCountdown() {    const now = new Date();    const timeLeft = targetDate - now;    if (timeLeft <= 0) {        document.getElementById("countdown").textContent = "De tijd is gekomen!";        return;    }    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);    const seconds = Math.floor((timeLeft / 1000) % 60);    document.getElementById("countdown").textContent =        days + "d " + hours + "h " + minutes + "m " + seconds + "s";}setInterval(updateCountdown, 1000);


