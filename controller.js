import { get_language } from "./contact_api.js";
import { contact } from "./contact_api.js";

import fs from "node:fs/promises";

// const project = document.querySelectorAll(".Projects");
// const languages = document.querySelectorAll(".Languages");

async function start() {
    // const repository_names = [];
    // const repository_names_filter = [];

    // export_data.forEach(element => {
    //     repository_names.push(element.name);
    // });

    // let random;

    // project.forEach(element => {
    //     random = Math.floor(Math.random() * repository_names.length);
        
    //     element.textContent = repository_names[random];
    //     repository_names_filter.push(repository_names[random]);
    // });

    // for (let element in repository_names_filter) {
    //     // const item = await get_language(repository_names[element]);
    //     console.log(repository_names[element]);
    // }
}

async function write_json(text) {
    const data_json_array = [];

    text.forEach(async element => {
        const lang = await get_language(element.name);
        
        const line = {
            project_name: element.name,
            languages: {
                lang
            } 
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
    write_json(data.name);
    start();
}, 21600000)