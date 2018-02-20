import {MAXIMIZE_CONTENT, MINIMIZE_CONTENT, TO_HOME, NORMALIZE_CONTENT} from './contentAction.types'
export const redirectToHome = (booleanValue)=>({
    type: TO_HOME
});

export const minimizeContent = ()=>({
    type: MINIMIZE_CONTENT
});
export const maximizeContent = ()=>({
    type: MAXIMIZE_CONTENT

});
export const normalizeContent = ()=>({
    type:NORMALIZE_CONTENT
})