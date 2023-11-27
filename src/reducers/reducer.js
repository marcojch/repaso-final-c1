export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'GET_CHARACTER': 
            return {...state, character: {}} //incompleto
        case 'ADD_FAV':
            return {...state, favs: []} //incompleto
        case 'DELETE_FAV':
            return {} //incompleto
        case 'CHANGE_THEME':
            return {...state, theme: ''} //incompleto
        default:
            return state
    }
}