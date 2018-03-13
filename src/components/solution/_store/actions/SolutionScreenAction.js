import {
    SOLUTION_ADDING, SOLUTION_EDITING, SOLUTION_LISTING
} from './SolutionScreenAction.types'


export const solutionEditing = (item)=>({
    type: SOLUTION_EDITING,
    payload:item
});
export const solutionAdding = ()=>({
    type: SOLUTION_ADDING
});
export const solutionListing = ()=>({
    type: SOLUTION_LISTING
});
