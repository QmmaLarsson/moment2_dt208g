//Importera gränssnitt från Task.ts
import { ITask } from "./ITask";

//En klass som implementerar gränssnittet
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