import {SET_DESCRIPTION, SET_ID} from './SolutionModelAction.types';


export const setDescription = (value)=>{
    return {
        type: SET_DESCRIPTION,
        payload:value
    }
};
export const setId = (value)=>{
    return {
        type: SET_ID,
        payload:value
    }
};
