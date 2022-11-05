export const addFavorite = (payload) => {
    return {
        type: "ADD_FAV",
        payload
    }
}

export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}