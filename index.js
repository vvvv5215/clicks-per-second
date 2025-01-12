let c = 0;
let timer;
let interval;
let duration;
let timerRunning = false; // Flag to check if the timer is running

const incrementCount = (event) => {
    if (!timerRunning) return; // Do nothing if the timer is not running
    event.preventDefault(); 
    c++;
    document.getElementById('v').innerHTML = c;
};

const updateTimer = () => {
    timer--;
    document.getElementById('timer').innerHTML = `Time left: ${timer}s`;
    if (timer <= 0) {
        clearInterval(interval);
        timerRunning = false; // Set the flag to false when the timer stops
        const cps = c / duration;
        const cpsDisplay = document.getElementById('cps-display');
        cpsDisplay.innerHTML = `CPS: ${cps.toFixed(2)}`;
        cpsDisplay.classList.remove('hidden');
        cpsDisplay.classList.add('visible');
        c = 0;
        document.getElementById('v').innerHTML = c;
        document.getElementById('timer').innerHTML = `Select an interval to start`;
        document.getElementById('start-10').disabled = false;
        document.getElementById('start-30').disabled = false;
    }
};

const startTimer = (selectedDuration) => {
    duration = selectedDuration; // Set the global duration variable
    timer = duration;
    timerRunning = true; // Set the flag to true when the timer starts
    document.getElementById('timer').innerHTML = `Time left: ${timer}s`;
    interval = setInterval(updateTimer, 1000);
    document.getElementById('start-10').disabled = true;
    document.getElementById('start-30').disabled = true;
};

document.getElementById('start-10').addEventListener('click', () => startTimer(10));
document.getElementById('start-30').addEventListener('click', () => startTimer(30));
document.addEventListener('click', incrementCount);
document.addEventListener('contextmenu', incrementCount);