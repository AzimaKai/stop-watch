// function here

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timer');
let int = null;

// adding event addEventListener and 'click'
// function for the start button
document.getElementById('startTimer').addEventListener('click', () => {
  if(int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

// function for the stop button
document.getElementById('pauseTimer').addEventListener('click'), () => {
  clearInterval(int)
};