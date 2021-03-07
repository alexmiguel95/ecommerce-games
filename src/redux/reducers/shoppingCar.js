import { ADD_SHOPPING_CAR, DELETE_SHOPPING_CAR } from "../actions/types";

const defaultState = [
    {
        "id": 201,
        "name": "Call Of Duty Infinite Warfare",
        "price": 49.99,
        "score": 80,
        "image": "call-of-duty-infinite-warfare.png"
    },
    {
        "id": 201,
        "name": "Call Of Duty Infinite Warfare",
        "price": 49.99,
        "score": 80,
        "image": "call-of-duty-infinite-warfare.png"
    },
    {
        "id": 312,
        "name": "Super Mario Odyssey",
        "price": 197.88,
        "score": 100,
        "image": "super-mario-odyssey.png"
    }
]

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