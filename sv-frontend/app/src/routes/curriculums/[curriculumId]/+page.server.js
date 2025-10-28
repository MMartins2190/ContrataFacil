const curriculumsURL = "http://127.0.0.1:8000/curriculos/";
const candidaciesURL = "http://127.0.0.1:8000/candidaturas/";

export const actions = {
    approve: async ({request, fetch, url}) => {
        console.log(url, "\n", request);
        const curriculumId = url.searchParams.get("id");
        const data = await request.formData();

    },
    reject: async ({request}) => {
        const data = await request.formData();
        console.log("Desaprovar", data);
        
    },
}