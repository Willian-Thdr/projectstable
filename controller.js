import { export_data } from "./contact_api.js";

const project = document.querySelectorAll(".Projects");
const link = document.querySelectorAll(".Languages");

async function start() {
    const repository_names = [];
    const separate_repository_link = [];
    const repository_link = [];

    export_data.forEach(element => {
        repository_names.push(element.name);
        repository_link.push(element.language);
    });

    let random;

    project.forEach(element => {
        random = Math.floor(Math.random() * repository_names.length);
        
        element.textContent = repository_names[random];
        separate_repository_link.push(repository_link[random]);

        repository_names.splice(random, 1);
    });

    let i = 0;
    link.forEach(element => {
        element.textContent = separate_repository_link[i];
        element.href = separate_repository_link[i];
        i+=1;
    });
}

start();
