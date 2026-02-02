const InitialState = {
    home: true,
};
export const pageReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SET_HOME":
            return { ...state, home: true };
        case "CART":
            return { ...state, home: false };
        default:
            return state;
    }
};