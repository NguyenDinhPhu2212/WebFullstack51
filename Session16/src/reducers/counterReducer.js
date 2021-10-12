export default (state = 0, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
};
