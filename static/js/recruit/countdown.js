const finaleTime = new Date("March 8, 2024 00:00:00").getTime();

const timer = () =>{
    const currentTime = new Date().getTime();
    let difference = finaleTime - currentTime;
    if(difference < 0){
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
        document.querySelector('#recruit h2').textContent = '신입 모집 마감';
        document.querySelector('#recruit button').textContent = '다음 모집 알림 받기';
        document.querySelector('#recruit button').onclick = notification;
        
    }
    
    let days = Math.floor(difference / (1000*60*60*24));
    let hours = Math.floor(difference % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(difference % (1000*60*60)/ (1000*60));
    let seconds = Math.floor(difference % (1000*60) / 1000);

    days = days <= 9 ? `0${days}` : `${days}`;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;   

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;

}


timer();
setInterval(timer, 1000);
