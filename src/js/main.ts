import { Task } from "./Task";
import { TaskManager } from "./TaskManager";
import { LocalStorageUtil } from "./LocalStorageUtil";

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
    const toDoList2 = document.getElementById("toDoList2") as HTMLUListElement;

    if (toDoList && toDoList2) {
        toDoList.innerHTML = "";
        toDoList2.innerHTML = "";

        //Sortera efter prioritetsordning
        tasks.sort((a, b) => a.priority - b.priority);

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>Uppgift: </strong>${task.task}<br>
            <strong>Prioritet: </strong>${task.priority}<br>
            `;

            //Knapp för att klarmarkera uppgift
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Klar";
            completeBtn.className = "completeBtn";
            completeBtn.addEventListener("click", () => completeTask(task));
            li.appendChild(completeBtn);

            //Knapp för att ta bort uppgift
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Ta bort";
            deleteBtn.className = "deleteBtn";
            deleteBtn.addEventListener("click", () => deleteTask(index));
            li.appendChild(deleteBtn);

            //Om uppgiften är markerad som klar så hamnar den i andra "Att göra"-listan
            if (task.completed) {
                toDoList2.appendChild(li);
            } else {
                toDoList.appendChild(li);
            }
        });
    }
    LocalStorageUtil.saveTasks(manager.getTasks());
}

//Funktion för att klarmarkera uppgift
function completeTask(task: Task): void {
    task.completed = !task.completed;

    renderTasks();
    LocalStorageUtil.saveTasks(manager.getTasks());
}

//Funktion för att ta bort en uppgift
function deleteTask(index: number): void {
    //Skickar in index till delteTask i TaskManager
    manager.deleteTask(index);
    renderTasks();
}

renderTasks();