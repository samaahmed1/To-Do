document.getElementById("toggle").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon-dark.webp";
  }
};
let taskButton = document.getElementById("task-btn");
taskButton.onclick = () => {
  let taskInput = document.getElementById("task-input");
  if (taskInput.value === "") {
    taskButton.ariaDisabled = true;
    taskButton.style.backgroundColor = "#dcd0f9";
  } else {
    taskButton.ariaDisabled = false;
    taskButton.style.backgroundColor = "#8562d0";
  }
};
