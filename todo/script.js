/*
task
id, title, description, isComplete
*/

const getTaskHTML = (t) => {
  const task = document.createElement("div");
  task.className = "task";
  task.id = "task-" + t.id;

  if (t.isComplete) {
    task.classList.add("completed");
  }

  const title = document.createElement("h3");
  title.textContent = t.title;

  const description = document.createElement("p");
  description.textContent = t.description;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn delete";
  deleteBtn.textContent = "Delete";

  const doneBtn = document.createElement("button");
  doneBtn.className = "btn";
  doneBtn.textContent = t.isComplete ? "Undo" : "Mark Done";

  task.append(title, description, deleteBtn, doneBtn);

  return { task, deleteBtn, doneBtn };
};

const tasksList = document.getElementById("tasks");

const showAllTodo = () => {
  let allTasks = localStorage.allTasks;

  if (!allTasks) {
    tasksList.innerHTML = "No task exists...";
    return;
  }

  allTasks = JSON.parse(allTasks);

  if (allTasks.length == 0) {
    tasksList.innerHTML = "No task exists...";
    return;
  }

  allTasks.forEach((task) => {
    const taskHTML = getTaskHTML(task);
    tasksList.appendChild(taskHTML.task);

    taskHTML.deleteBtn.addEventListener("click", () => {
      const updatedTasks = JSON.parse(localStorage.getItem("allTasks")).filter(
        (t) => t.id != task.id,
      );
      localStorage.setItem("allTasks", JSON.stringify(updatedTasks));
      taskHTML.task.remove();
    });

    // Mark Done
    taskHTML.doneBtn.addEventListener("click", () => {
      const allTasks = JSON.parse(localStorage.getItem("allTasks"));
      const currentTask = allTasks.find((t) => t.id == task.id);

      currentTask.isComplete = !currentTask.isComplete;

      localStorage.setItem("allTasks", JSON.stringify(allTasks));

      taskHTML.task.classList.toggle("completed");
      taskHTML.doneBtn.textContent = currentTask.isComplete
        ? "Undo"
        : "Mark Done";
    });
  });
};

showAllTodo();

const toDoForm = document.querySelector("#todo-form form");

const addTodo = (e) => {
  e.preventDefault();

  let allTasks = [];
  if (localStorage.allTasks) {
    allTasks = JSON.parse(localStorage.allTasks);
  }

  const task = {
    title: toDoForm.elements[0].value.trim(),
    description: toDoForm.elements[1].value.trim(),
    isComplete: false,
    id: allTasks.length,
  };

  allTasks.push(task);
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

  const taskHTML = getTaskHTML(task);
  tasksList.appendChild(taskHTML.task);

  taskHTML.deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    const updatedTasks = JSON.parse(localStorage.getItem("allTasks")).filter(
      (t) => t.id != task.id,
    );
    localStorage.setItem("allTasks", JSON.stringify(updatedTasks));
    taskHTML.task.remove();
  });

  // Mark Done
  taskHTML.doneBtn.addEventListener("click", () => {
    const allTasks = JSON.parse(localStorage.getItem("allTasks"));
    const currentTask = allTasks.find((t) => t.id == task.id);

    currentTask.isComplete = !currentTask.isComplete;

    localStorage.setItem("allTasks", JSON.stringify(allTasks));

    taskHTML.task.classList.toggle("completed");
    taskHTML.doneBtn.textContent = currentTask.isComplete
      ? "Undo"
      : "Mark Done";
  });

  toDoForm.elements[0].value = "";
  toDoForm.elements[1].value = "";
};

toDoForm.addEventListener("submit", addTodo);