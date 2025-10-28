import { redirect } from "@sveltejs/kit"

export async function load({ fetch }) {
    fetch("http://127.0.0.1/usuarios/")
    .then(usuarios => {
        return "Screw";
    })
}