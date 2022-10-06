let water = 0;
let interval = undefined;

function count() {
    const text = water < 10 ? '0' + water : water.toString();
    document.getElementById("count").textContent = text;
    water++;
}

function resetCounter() {
    // reset circle animation
    const e = document.getElementById("circle");
    e.style.animation = 'none';
    e.offsetHeight; /* trigger reflow */
    e.style.animation = null;

    // reset steps animation
    const s1 = document.getElementById("step1");
    s1.style.animation = 'none';
    s1.offsetHeight; /* trigger reflow */
    s1.style.animation = null;

    const s2 = document.getElementById("step2");
    s2.style.animation = 'none';
    s2.offsetHeight; /* trigger reflow */
    s2.style.animation = null;

    // reset counter
    water = 0;
    clearInterval(interval);
    count();
    interval = setInterval(count, 11000);
}

setTimeout(() => {
    // change body background to black (white only for init)
    // document.body.style.backgroundColor = 'black';

    // change hidden elements to visible
    document.getElementById("controls").classList.remove("hidden");
    document.getElementById("controls").classList.add("visible");

    // change circle from init animation to breath animation
    document.getElementById("circle").classList.remove("intro");
    document.getElementById("circle").classList.add("animated");

    // start step animation
    document.getElementById("step1").classList.add("animate-inhale");
    document.getElementById("step2").classList.add("animate-exhale");

    // start counter
    count();
    interval = setInterval(count, 11000);
}, 5000)
