const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      window.alert('Please choose a date in the future');
      document.getElementById('[data-start]').disabled = true;
    } else {
      document.getElementById('[data-start]').disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', startTimer);

let countdownInterval;

function startTimer() {
  const selectedDate = flatpickr.parseDate(document.getElementById('datetime-picker').value);
  const currentDate = new Date();
  const countdownTime = selectedDate - currentDate;

  if (countdownTime <= 0) {
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const { days, hours, minutes, seconds } = convertMs(countdownTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);

    countdownTime -= 1000;

    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      startButton.disabled = true;
    }
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return}