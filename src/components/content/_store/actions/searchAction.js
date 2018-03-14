import {SET_FIELD_TO_SEARCH,SET_TEXT_TO_SEARCH} from './searchAction.types'

export const setTextToSearch = (value)=>({
    type: SET_TEXT_TO_SEARCH,
    payload:value
});

export const setFieldToSearch = (key)=>({
    type: SET_FIELD_TO_SEARCH,
    payload:key
});

