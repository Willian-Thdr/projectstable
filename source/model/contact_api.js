export async function contact() {
    const info = await get_data();
    return info;
}

export async function get_data() {
    const answer = await fetch("https://api.github.com/users/Willian-Thdr/repos");
    const data = await answer.json();
    return data;
}

export const export_data = await get_data();

export async function get_language(link) {
    const answer = await fetch(`https://api.github.com/repos/Willian-Thdr/${link}/languages`);
    const data = await answer.json();

    return data;
}
