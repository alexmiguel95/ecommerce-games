import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './types';
 
export const addTask = (task) => { return { type: ADD_TASK, task: task }}
export const deleteTask = (indexTask) => { return { type: DELETE_TASK, task: indexTask }}
export const updateTask = (task) => { return { type: UPDATE_TASK, task: task }}