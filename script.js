//Imports
import { getLocalHost } from "./api-client.js";
import { postLocalHost } from "./api-client.js";
import { deleteTaskLocalHost } from "./api-client.js";

//Variables
export const input = document.getElementById("task");
export const taskList = document.getElementById("container");
export const taskDiv = document.createElement("div");
export const newLi = document.createElement("li");
export const secondLi = document.createElement("li")
export const deleteButton = document.createElement('button');
export const button = document.getElementById("addTask");

//Add tasks to DOM and server
const addNewTask = function (e) {        
        e.preventDefault();
        awaitPostLocalHost();
        input.value = "";   
}

//Show tasks in DOM
async function awaitGetLocalHost() {
    const showPosts =  await getLocalHost();
        showPosts.forEach((post) => {            
            taskDiv.classList.add('todoDiv');
            deleteButton.classList.add("trash-button");
            taskList.appendChild(taskDiv);
            taskDiv.appendChild(newLi);
            taskDiv.appendChild(secondLi);
            taskDiv.appendChild(deleteButton);
            newLi.innerHTML= post.description;
            secondLi.innerHTML = post._id;
            deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            console.log(post)
        }) 
}

awaitGetLocalHost();

//Post tasks in DOM
 async function awaitPostLocalHost() {
    const post =  await postLocalHost();           
            taskDiv.classList.add('todoDiv');
            deleteButton.classList.add("trash-button");
            taskList.appendChild(taskDiv);
            taskDiv.appendChild(newLi);
            taskDiv.appendChild(secondLi);
            taskDiv.appendChild(deleteButton);
            newLi.innerHTML = `Description: ${post.description}`;
            secondLi.innerHTML = post._id;
            deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
}

//Delete Tasks with class in DOM and ID in server
async function deleteTask (e) {
    const item = e.target;

    if (item.classList[0] === "fa-solid") {
        const task = item.parentElement.parentElement;
        const getID = task.firstChild.nextSibling.innerHTML;
        deleteTaskLocalHost(getID);
        task.remove();
    }
}

//Event listeners
button.addEventListener('click', addNewTask);
taskList.addEventListener('click', deleteTask);
