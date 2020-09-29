
const initialState = {
    categories: null,
    trains: null,
    workouts:null,
    category: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
            };
        case 'SET_TRAINS':
            return {
                ...state,
                trains: action.trains,
            };
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: action.workouts,
            };

        default:
            return state;
    }
}