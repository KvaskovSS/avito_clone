const isPublishDisabled = (formState: any, currentState: any) => {
    if (formState.name) {
        switch (formState.type) {
            case 'Недвижимость':
                return !formState.propertyType || !formState.area || !formState.rooms || !formState.price;
            case 'Авто':
                return !formState.brand || !formState.model || !formState.year;
            case 'Услуги':
                return !formState.serviceType || !formState.experience || !formState.cost;
            default:
                return true;
        }
    }
    switch (currentState.type) {
        case 'Недвижимость':
            return !currentState.propertyType || !currentState.area || !currentState.rooms || !currentState.price;
        case 'Авто':
            return !currentState.brand || !currentState.model || !currentState.year;
        case 'Услуги':
            return !currentState.serviceType || !currentState.experience || !currentState.cost;
        default:
            return true;
    };
}
export default isPublishDisabled;