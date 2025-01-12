let c = 0;
let t;
let int;
let dur;
let tRunning = false;

const incCount = (e) => {
    if (!tRunning) return;
    e.preventDefault(); 
    c++;
    document.getElementById('v').innerHTML = c;
};

const updTimer = () => {
    t--;
    document.getElementById('timer').innerHTML = `Time left: ${t}s`;
    if (t <= 0) {
        clearInterval(int);
        tRunning = false;
        const cps = c / dur;
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

const startT = (selDur) => {
    dur = selDur;
    t = dur;
    tRunning = true;
    document.getElementById('timer').innerHTML = `Time left: ${t}s`;
    int = setInterval(updTimer, 1000);
    document.getElementById('start-10').disabled = true;
    document.getElementById('start-30').disabled = true;
};

document.getElementById('start-10').addEventListener('click', () => startT(10));
document.getElementById('start-30').addEventListener('click', () => startT(30));
document.addEventListener('click', incCount);
document.addEventListener('contextmenu', incCount);
