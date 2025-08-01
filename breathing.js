class BreathingCounter {
    constructor(duration) {
        this.counter = 0;
        this.interval = null;
        this.duration = duration;

        this.countEl = document.getElementById("count");
        this.circle = document.getElementById("circle");
        this.steps = document.querySelectorAll(".step, .duration");

        this.update();
        this.start();
    }

    update() {
        this.countEl.textContent = this.counter;
    }

    tick() {
        this.counter++;
        this.update();
    }

    resetAnimations() {
        [...this.steps, this.circle].forEach(el => {
            el.style.animation = "none";
            el.offsetHeight;
            el.style.animation = "";
        });
    }

    start() {
        this.stop();
        this.interval = setInterval(() => this.tick(), this.duration);
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.counter = 0;
        this.resetAnimations();
        this.update();
        this.start();
    }
}

let breathing;

document.addEventListener("DOMContentLoaded", () => {
    const durationAttr = document.body.dataset.duration;
    const duration = parseInt(durationAttr, 10) || 11000;
    breathing = new BreathingCounter(duration);
});

function resetCounter() {
    breathing.reset();
}

window.resetCounter = resetCounter;