document.getElementById("toggle").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon-dark.webp";
  }
};

let taskInput = document.getElementById("task-input");
let taskButton = document.getElementById("task-btn");
let taskList = document.getElementById("list");

taskButton.disabled = true;
taskButton.style.backgroundColor = "#dcd0f9";

function checkTextInput() {
  if (taskInput.value.trim() === "") {
    taskButton.disabled = true;
    taskButton.style.backgroundColor = "#dcd0f9";
  } else {
    taskButton.disabled = false;
    taskButton.style.backgroundColor = "#8562d0";
  }
}
taskInput.addEventListener("input", checkTextInput);

taskButton.onclick = () => {
  if (taskInput.value.trim() !== "") {
    taskList.innerHTML += `
      <li class="task">
        <div class="info">
          <p class="task-details">${taskInput.value}</p>
          <p class="time"> ${new Date().toLocaleString()}</p>
        </div>
        <div class="action">
          <button class="delete">delete</button>
        </div>
      </li>
    `;
    taskInput.value = "";
    checkTextInput();

    let deleteButtons = document.querySelectorAll(".delete");
    let lastDeleteButton = deleteButtons[deleteButtons.length - 1];
    lastDeleteButton.onclick = function () {
      let li = this.closest("li");
      li.remove();
    };
  }
};
