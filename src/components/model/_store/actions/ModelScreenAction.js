import {
    MODEL_ADDING, MODEL_EDITING, MODEL_LISTING
} from './ModelScreenAction.types'


export const modelEditing = (item)=>({
    type: MODEL_EDITING,
    payload:item
});
export const modelAdding = ()=>({
    type: MODEL_ADDING
});
export const modelListing = ()=>({
    type: MODEL_LISTING
});
