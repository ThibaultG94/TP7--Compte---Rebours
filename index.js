let totalSeconds = 0;
let minutes = 0;
let seconds = 0;
let active = false;

function timeDisplay() {
  if (seconds < 10) {
    countdownDisplay.textContent = minutes + " : 0" + seconds;
  } else {
    countdownDisplay.textContent = minutes + " : " + seconds;
  }
}

function over() {
  if (active === false) {
    setTimeout(() => {
      countdownDisplay.style.visibility = "hidden";
    }, 500);
    setTimeout(() => {
      countdownDisplay.style.visibility = "visible";
      over();
    }, 1000);
  }
}

function compteRebours() {
  if (minutes === 0 && seconds === 0) {
    active = false;
    over();
  } else if (seconds === 0) {
    minutes -= 1;
    seconds = 59;
    timeDisplay();
    setTimeout(() => {
      compteRebours();
    }, 1000);
  } else {
    seconds -= 1;
    timeDisplay();
    setTimeout(() => {
      compteRebours();
    }, 1000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrez un chiffre avant que je me fâche");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    if (active === true) {
      return;
      timeDisplay();
      setTimeout(() => {
        compteRebours();
      }, 1000);
    } else {
      active = true;

      timeDisplay();
      setTimeout(() => {
        compteRebours();
      }, 1000);
    }
  }
});
