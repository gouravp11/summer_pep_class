async function getAllTask() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    return data;
}

(async function writeAllTaskToDOM() {
    const container = document.querySelector(".container");

    const data = await getAllTask();
    
    data.forEach(el => {
        const task = document.createElement("div");
        task.classList.add("task");
        const taskId = document.createElement("p");
        taskId.innerText = "taskId: " + el.id;
        const taskUserId = document.createElement("p");
        taskUserId.innerText = "taskUserId: " + el.userId;
        const taskTitle = document.createElement("h3");
        taskTitle.innerText = "title: "+ el.title;
        const taskStatus = document.createElement("p");
        taskStatus.innerText = "status: " + (el.completed? "Completed" : "Pending");

        task.appendChild(taskUserId);
        task.appendChild(taskId);
        task.appendChild(taskTitle);
        task.appendChild(taskStatus);

        container.appendChild(task);
    });

    // container.innerHTML = JSON.stringify(data);
})();