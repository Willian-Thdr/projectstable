import { export_data } from "./contact_api.js";
import { get_language } from "./contact_api.js";

const project = document.querySelectorAll(".Projects");
const languages = document.querySelectorAll(".Languages");

async function start() {
    const repository_names = [];
    const repository_names_filter = [];

    export_data.forEach(element => {
        repository_names.push(element.name);
    });

    let random;

    project.forEach(element => {
        random = Math.floor(Math.random() * repository_names.length);
        
        element.textContent = repository_names[random];
        repository_names_filter.push(repository_names[random]);
    });

    repository_names_filter.forEach(element => {
        const lang = get_language(element);
        console.log(lang);
    });
}

start();
