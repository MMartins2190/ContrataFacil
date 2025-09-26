export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        console.log("Criar cu", data);
        
    },
    update: async ({request}) => {
        const data = await request.formData();
        console.log("Alterar cu", data);
        
    },
    delete: async ({request}) => {
        const data = await request.formData();
        console.log("Apagar cu", data);
        
    },
}