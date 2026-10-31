export async function get_data() {
    const answer = await fetch("https://api.github.com/users/Willian-Thdr/repos");

    const data = await answer.json();

    return data;
}

export const export_data = await get_data();
