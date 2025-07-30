let counter = 0;
let interval = undefined;

function count() {
    document.getElementById("count").textContent = counter;
    counter++;
}

function resetCounter() {
    // reset circle animation
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
    interval = setInterval(count, 19000);
}

setTimeout(() => {
    // change hidden elements to visible
    document.getElementById("controls").classList.remove("hidden");
    document.getElementById("controls").classList.add("visible");

    // change circle from init animation to breath animation
    document.getElementById("circle").classList.remove("intro");
    document.getElementById("circle").classList.add("animated");

    // start step animation
    document.getElementById("step1").classList.add("animate-inhale");
    document.getElementById("step2").classList.add("animate-hold");
    document.getElementById("step3").classList.add("animate-exhale");

    // start counter
    count();
    interval = setInterval(count, 19000);
}, 5000)
