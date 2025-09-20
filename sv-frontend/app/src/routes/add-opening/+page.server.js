export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        console.log("Criar", data);
        
    },
    update: async ({request}) => {
        const data = await request.formData();
        console.log("Alterar", data);
        
    },
    delete: async ({request}) => {
        const data = await request.formData();
        console.log("Apagar", data);
        
    },
}