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

function addToDo() {
    console.log("Hello world!");
}