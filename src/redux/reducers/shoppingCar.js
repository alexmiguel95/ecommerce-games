import { ADD_SHOPPING_CAR, DELETE_SHOPPING_CAR } from "../actions/types";

const defaultState = []

const shoppingCar = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SHOPPING_CAR:
            return [...state, action.game]
    
        case DELETE_SHOPPING_CAR:
            state.splice(action.game, 1);
            return [...state]

        default:
            return state;
    }
}
 
export default shoppingCar;