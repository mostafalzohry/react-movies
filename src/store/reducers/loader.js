const INITIAL_VALUE = {
    isLoader: true
}

export default function loaderReducer(state= INITIAL_VALUE, action){
    switch(action.type){
        case "CHANGE_LOADER":
            return{
                ...state,
                isLoader: action.payload
            }
        default: 
            return state
    }
}