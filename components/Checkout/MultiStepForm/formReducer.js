export default function formReducer(previousState, action) {
    switch (action.type) {
        case "RESET":
            return {};

        case "UPDATE_KEY_VALUES":
            return {
                ...previousState,
                ...action.value
            };

        case "TOGGLE_DARE":
            return {
                ...previousState,
                userDares: !previousState.userDares
            };

        default:
            return previousState;
    }
};
