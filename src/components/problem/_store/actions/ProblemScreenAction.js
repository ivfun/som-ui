import {
    PROBLEM_ADDING, PROBLEM_EDITING, PROBLEM_LISTING
} from './ProblemScreenAction.types'


export const problemEditing = (item)=>({
    type: PROBLEM_EDITING,
    payload:item
});
export const problemAdding = ()=>({
    type: PROBLEM_ADDING
});
export const problemListing = ()=>({
    type: PROBLEM_LISTING
});
