import { createTimer } from "./counter.js";
const button = document.querySelector('.btn');
const handleClick1 = () => {
    console.log(this.id);
    console.log(this.textContent);
}

button.addEventListener('click', handleClick1)

function handleClick() {
    console.log(this.id);
    console.log(this.textContent);    
}

createTimer(10,"timer")
