import {
    CHANGED_PAGE, FIRST_PAGE
} from './PaginationAction.types'

export const changedPage = (newPage)=>({
    type: CHANGED_PAGE,
    payload:newPage
});

export const firstPage = ()=>({
    type:FIRST_PAGE
});

