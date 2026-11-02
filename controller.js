import { get_language } from "./contact_api.js";
import { contact } from "./contact_api.js";

import fs from "node:fs/promises";

const project = document.querySelectorAll(".Projects");
const languages = document.querySelectorAll(".Languages");

async function start() {
    const archive = await fs.readFile("data.json", "utf-8");
    const data = JSON.parse(archive);

    const repository_names = [];
    const repository_names_filter = [];
    const project_languages = [];
    const project_languages_filter = [];

    data.forEach(element => {
        repository_names.push(element.name);
    });

    data.forEach(element => {
        project_languages.push(element.languages);
    });

    let random;

    project.forEach(element => {
        random = Math.floor(Math.random() * repository_names.length);
        
        element.textContent = repository_names[random];
        repository_names_filter.push(repository_names[random]);
        project_languages_filter.push(project_languages[random]);
    });

    let i;
    languages.forEach(element => {
        element.textContent = project_languages_filter[i];
        i+=1;
    });
}

async function write_json(text) {
    const data_json_array = [];

    text.forEach(async element => {
        const languages = await get_language(element.name);
        
        const line = {
            project_name: element.name,
            languages
        };
        data_json_array.push(line);

        await fs.writeFile(
            "data.json",
            JSON.stringify(data_json_array, null, 4)
        )
    });
}

const data = await contact();
write_json(data);
start();

setInterval(async () => {
    const data = await contact();
    write_json(data);
    start();
}, 21600000)