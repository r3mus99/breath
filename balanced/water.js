let counter = 0;
let interval = undefined;

function count() {
    document.getElementById("count").textContent = counter;
    counter++;
}

function resetCounter() {
    // reset circle animation
    // todo reflow step and duration
    const e = document.getElementById("circle");
    e.style.animation = 'none';
    e.offsetHeight; /* trigger reflow */
    e.style.animation = null;

    // reset steps animation
    Array.from(document.getElementsByClassName("step")).forEach(step => {
        step.style.animation = 'none';
        step.offsetHeight; /* trigger reflow */
        step.style.animation = null;
    })

    // reset counter
    counter = 0;
    clearInterval(interval);
    count();
    interval = setInterval(count, 11000);
}

count();
interval = setInterval(count, 11000);
