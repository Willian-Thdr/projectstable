import { start } from "./controller"
import { get_language } from "../../source/model/contact_api.js";
import { contact } from "../../source/model/contact_api.js";

const items = document.getElementById("items")

async function write_json(text) {
    const data_json_array = [];

    text.forEach(async element => {
        const languages = await get_language(element.name);
        
        const line = {
            project_name: element.name,
            languages
        };
        data_json_array.push(line);    
    });

    return JSON.stringify(data_json_array, null, 4);
}

const data = await contact();
const json_parse_data = await write_json(data);
items.textContent = json_parse_data;
start();

setInterval(async () => {
    const data = await contact();
    write_json(data);
    items.textContent = json_parse_data;
    start();
}, 21600000);
