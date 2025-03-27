const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.clockface');

class Timer {
  constructor() {
    this.isActive;
    return;
  }

  start() {
    const startTime = Date.now();
    this.isActive = true;

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponent(deltaTime);

      console.log(time);
    }, 1000);
  }

  getTimeComponent(time) {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    //61000 = 1xw 1 sek

    return { hours, mins, secs };
  }
}

const time = new Timer();

console.log(time);

startBtn.addEventListener('click', time.start.bind(time));
