import {
    CUSTOMER_ADDING, CUSTOMER_EDITING, CUSTOMER_LISTING
} from './CustomerScreenAction.types'


export const customerEditing = (item)=>({
    type: CUSTOMER_EDITING,
    payload:item
});
export const customerAdding = ()=>({
    type: CUSTOMER_ADDING
});
export const customerListing = ()=>({
    type: CUSTOMER_LISTING
});
