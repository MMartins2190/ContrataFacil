export const actions = {
    approve: async ({request}) => {
        const data = await request.formData();
        console.log("Aprovar", data);
        
    },
    reject: async ({request}) => {
        const data = await request.formData();
        console.log("Desaprovar", data);
        
    },
}