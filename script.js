let seconds = 0;
let timer = null;

const timerDisplay = document.getElementById("timer");
const progress = document.getElementById("progress");
const hours = document.getElementById("hours");

function updateTimer() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timerDisplay.textContent =
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");

    let studiedHours = seconds / 3600;
    progress.value = Math.min(studiedHours, 8);
    hours.textContent = studiedHours.toFixed(

        document.getElementById("startBtn").onclick = () => {

    if (timer) return;

    if (seconds === 0) {
        const studyMinutes = parseInt(document.getElementById("studyMinutes").value);
        seconds = studyMinutes * 60;
        updateTimer();
    }

    timer = setInterval(() => {
        seconds--;
        updateTimer();

        if (seconds <= 0) {
            clearInterval(timer);
            timer = null;
            alert("🎉 Study session completed!");
        }
    }, 1000);
};

document.getElementById("pauseBtn").onclick = () => {
    clearInterval(timer);
    timer = null;
};

document.getElementById("resetBtn").onclick = () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTimer();
};

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        li.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        taskList.appendChild(li);
    });
}

document.getElementById("addTask").onclick = () => {
    if (taskInput.value.trim() === "") return;

    tasks.push(taskInput.value);

    saveTasks();
    renderTasks();

    taskInput.value = "";
};

renderTasks();
const today = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

 const todayDate = document.getElementById("todayDate");

if (todayDate) {
  todayDate.textContent =
    "📅 " + today.toLocaleDateString("en-IN", options);
}
