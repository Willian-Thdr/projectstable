const project = document.querySelectorAll(".Projects");
const languages = document.querySelectorAll(".Languages");

export async function start() {
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