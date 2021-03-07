import { ADD_SHOPPING_CAR, DELETE_SHOPPING_CAR, GET_PRORI_VALUE } from './types';
 
export const addSoppingCar = (game) => { return { type: ADD_SHOPPING_CAR, game: game }}
export const deleteSoppingCar = (game) => { return { type: DELETE_SHOPPING_CAR, game: game }}
export const getPrioriValue = () => { return { type: GET_PRORI_VALUE }}