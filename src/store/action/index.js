const ageUp = (payload) => {
    return {
        type: "AGE_UP",
        payload
    }
}
const ageDown = (payload) => {
    return {
        type: "AGE_DOWN",
        payload
    }
}
export {
    ageUp,
    ageDown
}