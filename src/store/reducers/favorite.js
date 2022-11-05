
const INITIALVALUE = {
    numberCart:0,
    Carts:[]
}

export default function favoriteReducer(state= INITIALVALUE, action){
    switch(action.type){
        case "ADD_FAV":
            let cart = action.payload;
            if(state.Carts.indexOf(cart) === -1){
                state.Carts.push(cart);
                state.numberCart+=1;
            }
            return{
                ...state
            }
        case 'DELETE_CART':
            return{
                ...state,
                Carts:state.Carts.filter(item=>{
                    return item.id!=state.Carts[action.payload].id
                }),
                numberCart:state.numberCart-1
            }
        default: 
            return state
    }
}