import { createTimer } from "./src/timer.js";
import { showNotification } from "./src/notification.js";
const button = document.querySelector('.btn');

// If passed as a callback/event listener would log undefined because arrow function are lexically scoped
const handleClick1 = () => {
    // showNotification(`The button Id: ${this.id || 'undefined'}, textContent: ${this.textContent || 'undefined'}`);
    console.log(this.id);
    console.log(this.textContent);
}

button.addEventListener('click', handleClick)
// If passed as a callback/event listener would return the id and textContent of the button
function handleClick() {
    showNotification(`The button Id: ${this.id}, textContent: ${this.textContent}`);
    console.log(this.id);
    console.log(this.textContent);    
}

createTimer(10,"timer")
