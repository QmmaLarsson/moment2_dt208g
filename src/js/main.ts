import { Task } from "./Task";
import { TaskManager } from "./TaskManager";

//Händelselyssnare som körs när allt DOM-innehåll har laddats
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")! as HTMLFormElement;
    //Händelselyssnare som körs vid klick på submit-knappen
    form.addEventListener("submit", (event) => {
        //Förhindrar att formuläret skickas traditionellt
        event.preventDefault();
        addToDo();
    });
});

//Skapar en instans av TaskManager
const manager = new TaskManager();

//Funktion för att lägga till en ny uppgift
function addToDo(): void {
    const taskInput = document.getElementById("task") as HTMLInputElement;
    const priorityInput = document.getElementById("priority") as HTMLInputElement;

    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);
    const completed = false;

    if (!task.trim()) {
        alert("Vänligen fyll i alla fält");
    } else {
        const newTask = new Task(task, priority, completed);
        //Skickar in newTask till addTask i TaskManager
        manager.addTask(newTask);
        //Rensar formuläret
        taskInput.value = "";
        priorityInput.value = "1";
        renderTasks();
    }
}

//Funktion för att rendera uppgifterna på sidan
function renderTasks(): void {
    const tasks = manager.getTasks();
    const toDoList = document.getElementById("toDoList") as HTMLUListElement;

    if (toDoList) {
        toDoList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>Uppgift: </strong>${task.task}<br>
            <strong>Prioritet: </strong>${task.priority}<br>
            <strong></strong>${task.completed}<br>
            `;

            //Knapp för att ta bort uppgift
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Ta bort";
            deleteBtn.className = "deleteBtn";
            deleteBtn.addEventListener("click", () => deleteTask(index));
            li.appendChild(deleteBtn);

            toDoList.appendChild(li);
        });
    }
}

//Funktion för att ta bort en uppgift
function deleteTask(index: number): void {
    //Skickar in index till delteTask i TaskManager
    manager.deleteTask(index);
    renderTasks();
}

renderTasks();