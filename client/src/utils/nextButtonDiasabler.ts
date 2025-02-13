const isNextDisabled = (state: any) => {
    return !state.name || !state.type || !state.location || !state.description;
}

export default isNextDisabled;