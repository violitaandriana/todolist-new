// Steps
// 1. Make sure browser dari user support local storage
// 2. Kalau local storage di-support, populate data dari local storage
// 3. Persist data yg sdh di-submit user
import Project from "./Project.js";
import Task from "./Task.js";

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function persistProject(Project) {
    try {
        localStorage.setItem(Project.getName(), JSON.stringify(Project));

    } catch (error) {
        console.log(error);
        alert(`Failed to persist project  ${Project.getName()} +  data`);
    }
}

function deserializeProject(projectJSONstr){
    // ubah dari string ke json object
    const projectJSONObj = JSON.parse(projectJSONstr);
    
    const project = new Project(projectJSONObj.name);
    
    projectJSONObj.tasks.forEach(taskJSONObj => {
        // dari taskJSONObj dijadikan object Task
        const task = Object.assign(new Task, taskJSONObj);
        project.addTask(task);
    });

    return project;
}


export { storageAvailable, persistProject, deserializeProject };
