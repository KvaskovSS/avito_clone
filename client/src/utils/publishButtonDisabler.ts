const isPublishDisabled = (formState: any) => {
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
export default isPublishDisabled;