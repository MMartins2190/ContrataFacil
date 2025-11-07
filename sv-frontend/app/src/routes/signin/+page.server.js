
// export const actions = {
//     default: async ({ request, fetch }) => {
//         console.log("RequestObj: ", request);
//         const requestData = request.formData();
//         console.log("Objeto Request", requestData);
//         fetch(urlString, {
//             method: "POST",
//             body: requestData,
//         })
//         .then(res => res.json())
//         .then(jsonData => console.log(jsonData))
//         .catch(err => console.warn("All shits and giggles", err));
//     }
// }