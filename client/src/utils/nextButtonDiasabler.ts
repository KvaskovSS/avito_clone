const isNextDisabled = (formState: any) => {
    return !formState.name || !formState.type || !formState.location || !formState.description;
}

export default isNextDisabled;