function addTask() {
    let newTaskInput = document.getElementById("task");
    let taskList = document.getElementById("listatask");

    if (newTaskInput.value.trim() !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = newTaskInput.value;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<div class="icon-container"> <span class="material-symbols-outlined">delete</span> </div>';
        deleteButton.onclick = function () {
            newTask.remove();
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        newTaskInput.value = "";

        newTask.addEventListener("click", function () {
            if (!newTask.classList.contains("completed")) {
                newTask.classList.add("completed");
            };
        });
    };
};