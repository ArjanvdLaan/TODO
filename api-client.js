//Import
import { input } from './script.js';

//Post request
export async function postLocalHost() {
    try {
        const apiUrl = "http://localhost:3000/";
        const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({
                    description: input.value, 
                    done: false
                    }),
                headers: {"Content-Type": "application/json"},
            })
        const returnValue = await response.json();
        return returnValue;
    } catch (error) {
        console.log(error);
    }
}

//Get request
export async function getLocalHost() {
    try {
        const apiUrl = "http://localhost:3000/";
        const response = await fetch(apiUrl, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
        const returnValue = await response.json();
        return returnValue;
    } catch (error) {
        console.log(error);
    }
}

//Delete request
export async function deleteTaskLocalHost(id) {
    try {
        const apiUrl = `http://localhost:3000/${id}`;
        const response = await fetch(apiUrl, {
                method: "DELETE"
            })
    } catch (error) {
        console.log(error);
    }
}