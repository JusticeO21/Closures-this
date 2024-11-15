export function createTimer(duration, elementId) { 
    const timerElement = document.getElementById(elementId);
    let count = duration;

    const timer = setInterval(() => {
        count -= 1;
        if (count < 0) {
            clearInterval(timer);
            timerElement.textContent = "Time's up!";
            console.log("Time's up!"); 
            return
        }
        
        console.log(count);
        timerElement.textContent = `${count} seconds remaining...`;
    }, 1000);
 }

