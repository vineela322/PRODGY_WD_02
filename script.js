let timer;
let isRunning = false;
let timeElapsed = 0;
let lapCount = 0;
let laps = [];

const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapList = document.getElementById('lapList');

function updateDisplay() {
    let minutes = Math.floor(timeElapsed / 60000);
    let seconds = Math.floor((timeElapsed % 60000) / 1000);
    let milliseconds = timeElapsed % 1000;

    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(3, '0');
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            timeElapsed++;
            updateDisplay();
        }, 10);
        isRunning = true;
        startStopButton.textContent = 'Stop';
    } else {
        clearInterval(timer);
        isRunning = false;
        startStopButton.textContent = 'Start';
    }
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0;
    lapCount = 0;
    laps = [];
    updateDisplay();
    lapList.innerHTML = '';
    startStopButton.textContent = 'Start';
}

function recordLap() {
    if (isRunning) {
        lapCount++;
        let minutes = Math.floor(timeElapsed / 60000);
        let seconds = Math.floor((timeElapsed % 60000) / 1000);
        let milliseconds = timeElapsed % 1000;
        let lapTime = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')};

        laps.push(lapTime);

        let lapItem = document.createElement('li');
        lapItem.textContent = Lap ${lapCount}: ${lapTime};
        lapList.appendChild(lapItem);
    }
}

// Event Listeners
startStopButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);