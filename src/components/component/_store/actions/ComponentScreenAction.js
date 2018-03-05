import {
    COMPONENT_ADDING, COMPONENT_EDITING, COMPONENT_LISTING
} from './ComponentScreenAction.types'


export const componentEditing = (item)=>({
    type: COMPONENT_EDITING,
    payload:item
});
export const componentAdding = ()=>({
    type: COMPONENT_ADDING
});
export const componentListing = ()=>({
    type: COMPONENT_LISTING
});
