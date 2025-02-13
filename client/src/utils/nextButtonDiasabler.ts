const isNextDisabled = (formState: any, currentState : any) => {
    if(formState.name){
        return !formState.name || !formState.type || !formState.location || !formState.description;
    }
    return !currentState.name || !currentState.type || !currentState.location || !currentState.description;
}

export default isNextDisabled;