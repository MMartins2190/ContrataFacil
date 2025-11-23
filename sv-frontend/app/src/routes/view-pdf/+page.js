import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({fetch}) {
    const pdf = await fetch(`${PUBLIC_API_ROOT_URL}/pdf/`);
    return {
      pdf: await pdf.json(),
    };
}