import {SET_DESCRIPTION} from './ComponentModelAction.types';


export const setDescription = (value)=>{
    return {
        type: SET_DESCRIPTION,
        payload:value
    }
};
