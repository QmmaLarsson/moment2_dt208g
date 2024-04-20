import { Task } from "./Task";

export class LocalStorageUtil {
    static saveTasks(tasks: Task[]) {
        //Sparar task-arrayen till localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    //Hämtar task-arrayen från localStorage
    static loadTasks(): Task[] {
        const taskStr = localStorage.getItem("tasks");

        if (taskStr) {
            return JSON.parse(taskStr);
        } else {
            //Om inga uppgifter finns sparade, returnera en tom array
            return [];
        }
    }
}