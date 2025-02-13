const isPublishDisabled = (state: any) => {
    switch (state.type) {
        case 'Недвижимость':
            return !state.propertyType || !state.area || !state.rooms || !state.price;
        case 'Авто':
            return !state.brand || !state.model || !state.year;
        case 'Услуги':
            return !state.serviceType || !state.experience || !state.cost;
        default:
            return true;
    }
};


export default isPublishDisabled;