import { goto } from "$app/navigation";
import { PUBLIC_API_ROOT_URL } from "$env/static/public";

export async function load({ parent }) {
    const parentData = await parent();
    if (parentData.user.empresa) {
        return goto(`/enterprise-intro/${parentData.user.empresa}/`);
    };
}