// 1 Project punya banyak todo
export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(index) {
        this.tasks = this.tasks.filter((task, i) => i !== index);
    }

    getAllTasks() {
        return this.tasks;
    }

    getName() {
        return this.name;
    }

    checkTask(title) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getTitle() === title) {
                return true;
            }
        }
        return false;
    }
}