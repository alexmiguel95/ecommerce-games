
import { combineReducers } from 'redux';
import productsList from './productsList';
import shoppingCar from './shoppingCar';
export default combineReducers({ productsList, shoppingCar });