//Importera gränssnitt från IToDo.ts
import { ITask } from "./IToDo";

//Skapa en klass som implementerar gränssnittet
export class Task implements ITask {
    task: string;
    priority: number;
    completed: boolean;

    constructor(task: string, priority: number, completed: boolean) {
        this.task = task;
        this.priority = priority;
        this.completed = completed;
    }
}