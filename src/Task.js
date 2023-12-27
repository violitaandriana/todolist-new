// Your todo list should have projects or separate lists of todos.
import { format } from 'date-fns';

export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        let date = format(new Date(), 'EEEE, dd MMM yyyy');
        if (this.dueDate === '')
            this.dueDate = date;
        else 
            this.dueDate = format(new Date(this.dueDate), 'EEEE, dd MMM yyyy');
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setProject(projectName) {
        this.project = projectName;
    }

    getProject() {
        return this.project;
    }
}