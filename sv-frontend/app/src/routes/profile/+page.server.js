export const load = (event) => {
    const userObj = event.locals.user;
    return {
        user:userObj,
    };
}