export const addFile = (state, value) => {
    state.files =[ ...state.file, value];
}
export const setPercentage = (state, value) =>{
    state.percentage=value;
}