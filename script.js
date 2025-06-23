const textDisplay = document.getElementById("textDisplay");
const inputArea = document.getElementById("inputArea");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restartBtn");

const texts = [
  "Typing is a fundamental skill that can improve your productivity and communication. When you type efficiently, you save time and reduce stress. Practicing regularly can help you build muscle memory and accuracy. This typing test is designed to help you measure how many words you can type in a short span of time. Focus on accuracy before speed. A good typist knows that precision always beats haste. Use this challenge to push your limits. As you keep practicing, you will notice consistent improvement in your typing skills. Take a deep breath, focus, and begin typing when you're ready.",

  "The ability to type quickly and accurately is essential in many aspects of life. Whether you are writing emails, coding software, or composing documents, your typing speed plays a big role in how efficiently you work. This tool is a simple way to test yourself. You are not racing against others—only yourself. Don't worry about typos at first. Instead, try to build consistency. Even five minutes a day can help you gain speed. You’ll be surprised how quickly progress comes with regular practice. Let your fingers flow as your mind thinks.",

  "Many professional roles today demand strong typing skills. Whether you're a developer, writer, analyst, or student, the better your typing, the more time you save. Typing tests are more than just games—they're ways to challenge yourself and improve your workflow. During this test, keep your eyes on the screen and your fingers on the home row. Don’t be afraid to make mistakes—just keep going. The goal is progress, not perfection. Watch how your speed and accuracy grow over time. Stay focused and type with purpose.",

  "Fast typing is not just a requirement but a competitive edge in today’s digital age. Imagine writing code, documents, or messages twice as fast without losing accuracy. That’s the power of consistent typing practice. Each letter you type trains your brain and muscles. Stay relaxed and maintain proper posture. Type this passage as fast and accurately as you can. When you finish, reflect on your mistakes and try again. Like any skill, typing well is built over time and effort. Let's begin!"
];


let timer;
let timeLeft = 30;
let started = false;
let correctChars = 0;
let totalChars = 0;
let currentText = texts[Math.floor(Math.random() * texts.length)];

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      inputArea.disabled = true;
      calculateResults();
    }
  }, 1000);
}

function calculateResults() {
  const userInput = inputArea.value;
  totalChars = userInput.length;
  correctChars = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === currentText[i]) {
      correctChars++;
    }
  }

  const wordsTyped = userInput.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / 30) * 60);
  const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

  wpmEl.textContent = wpm;
  accuracyEl.textContent = accuracy;
}

function resetTest() {
  clearInterval(timer);
  timeLeft = 30;
  started = false;
  correctChars = 0;
  totalChars = 0;
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0";
  inputArea.disabled = false;
  inputArea.value = "";
  textDisplay.textContent = currentText;
}

inputArea.addEventListener("input", () => {
  if (!started) {
    startTimer();
    started = true;
  }
});

restartBtn.addEventListener("click", () => {
  currentText = texts[Math.floor(Math.random() * texts.length)];
  resetTest();
});

resetTest();
function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000); // 5000 ms = 5 seconds
}

// Call it when needed
showPopup();

