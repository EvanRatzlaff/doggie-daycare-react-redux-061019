const initialState = {
    pets: [],
    pet: {}
}

const petsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PET":
            return {
                ...state,
                pets: [...state.pets, action.pet]
            }
        case "GET_PETS":
            return {
                ...state, pets: action.pets
            }
        case "GET_PET":
            return {
                ...state, pet: action.pet
                
            }
        default:
            return state;
    }
}

export default petsReducer;