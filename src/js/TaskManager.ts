import { Task } from "./Task";
import { LocalStorageUtil } from "./LocalStorageUtil";

export class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.tasks = LocalStorageUtil.loadTasks();
    }

    //Lägger till ny uppgift på listan och sparar till localStorage
    public addTask(task: Task): void {
        this.tasks.push(task);
        LocalStorageUtil.saveTasks(this.tasks);
    }


    //Tar bort en uppgift från "Att göra"-listan och sparar till localStorage
    public deleteTask(index: number): void {
        this.tasks.splice(index, 1);
        LocalStorageUtil.saveTasks(this.tasks);
    }

    //Hämtar de uppgifter som finns sparade i localStorage
    public getTasks(): Task[] {
        return this.tasks;
    }
}