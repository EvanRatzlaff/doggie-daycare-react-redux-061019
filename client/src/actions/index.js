const baseUrl = 'http://localhost:3001'

export const addPet = pet => {
    return dispatch => {
        return fetch(baseUrl + '/api/pets', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pet})
        })
        .then(response => response.json())
        .then(pet => {
            dispatch({type: "ADD_PET", pet})
        })
    }
}

export const getPets = () => {
    return dispatch => {
        return fetch(baseUrl + '/api/pets')
        .then(response => response.json())
        .then(pets => {
            return dispatch({ type: "GET_PETS", pets })
        })
    }
}

export const getPet = id => {
    return dispatch => {
        return fetch(baseUrl + '/api/pets/' + id)
        .then(response => response.json())
        .then(pet => dispatch({type: "GET_PET", pet}))
    }
}