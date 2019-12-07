var number1 = 0;
var number2 = 0;
var number3 = 0;

var place1 = 0;
var place2 = 0;
var place3 = 0;

function reset() {
  number1 = 0;
  number2 = 0;
  number3 = 0;

  place1 = 0;
  place2 = 0;
  place3 = 0;
  document.getElementById("startBtn").disabled = false;
  updateTimer();
  enable6789();
}

function updateTimer() {
  document.getElementById("timerDisplay").innerHTML = number1 + " : " + number2 + number3;
}

function disable6789() {
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true;
  document.getElementById("button9").disabled = true;
}

function enable6789() {
  document.getElementById("button6").disabled = false;
  document.getElementById("button7").disabled = false;
  document.getElementById("button8").disabled = false;
  document.getElementById("button9").disabled = false;
}

// Add number 0 --------------------------------------------
function add0() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 0;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 0;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 0;
    updateTimer();
  }
}

// Add number 1 --------------------------------------------
function add1() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 1;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 1;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 1;
    updateTimer();
  }
}

// Add number 2 --------------------------------------------
function add2() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 2;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 2;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 2;
    updateTimer();
  }
}

// Add number 3 --------------------------------------------
function add3() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 3;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 3;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 3;
    updateTimer();
  }
}

// Add number 4 --------------------------------------------
function add4() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 4;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 4;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 4;
    updateTimer()
  }
}

// Add number 5 --------------------------------------------
function add5() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 5;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 5;
    updateTimer();
    enable6789();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 5;
    updateTimer();
  }
}

// Add number 6 --------------------------------------------
function add6() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 6;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 6;
    updateTimer();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 6;
    updateTimer();
  }
}

// Add number 7 --------------------------------------------
function add7() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 7;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 7;
    updateTimer();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 7;
    updateTimer();
  }
}

// Add number 8 --------------------------------------------
function add8() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 8;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 8;
    updateTimer();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 8;
    updateTimer();
  }
}

// Add number 9 --------------------------------------------
function add9() {
  if (place1 == 0) {
    place1 = 1;
    number1 = 9;
    updateTimer();
    disable6789();
  }

  else if (place2 == 0) {
    place2 = 1;
    number2 = 9;
    updateTimer();
  }

  else if (place3 == 0) {
    place3 = 1;
    number3 = 9;
    updateTimer();
  }
}

// TIMER SECTION ------------------------------------
function startTimer() {
  document.getElementById("startBtn").disabled = true;

  if (number3 > 0) {
    number3 -= 1;
    updateTimer();
    setTimeout(startTimer, 1000);
  }

  else if (number3 <= 0) {
    if (number2 >= 1) {
      number2 -= 1;
      number3 = 10;
      startTimer();
    }

    else if (number1 >= 1) {
      number1 -= 1;
      number2 = 5;
      number3 = 10;
      startTimer();
    }

    else {
      alert("Time is up!");
      reset();
    }
  }
}
