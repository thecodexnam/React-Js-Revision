const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");
const ampm = document.getElementById("AM-PM");
const dayEl = document.getElementById("day");
const monEl = document.getElementById("mon");
const yearEl = document.getElementById("year");
const toggleBtn = document.getElementById("themeToggle");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/* ================= CLOCK ================= */

function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    const amPm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    hrs.textContent = String(h).padStart(2, "0");
    mins.textContent = String(m).padStart(2, "0");
    sec.textContent = String(s).padStart(2, "0");
    ampm.textContent = amPm;

    dayEl.textContent = days[now.getDay()];
    monEl.textContent = months[now.getMonth()];
    yearEl.textContent = now.getFullYear();
}

setInterval(updateClock, 1000);
updateClock();

/* ================= THEME ================= */

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
});
