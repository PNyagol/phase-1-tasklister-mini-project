document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      taskList.appendChild(newTask);

      taskInput.value = ""; // Clear the input field
    }
  });
});
