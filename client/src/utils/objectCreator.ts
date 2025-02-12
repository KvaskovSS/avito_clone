const createObject = (type: string, state: any) => {
    const obj: any = {};
    switch (type) {
        case "Недвижимость":
            obj.name = state.name;
            obj.description = state.description;
            obj.location = state.location;
            obj.image = state.image;
            obj.type = state.type;
            obj.propertyType = state.propertyType;
            obj.area = state.area;
            obj.rooms = state.rooms;
            obj.price = state.price;
            break;
        case "Авто":
            obj.name = state.name;
            obj.description = state.description;
            obj.location = state.location;
            obj.image = state.image;
            obj.type = state.type;
            obj.brand = state.brand;
            obj.model = state.model;
            obj.year = state.year;
            obj.mileage = state.mileage;
            break;
        case "Услуги":
            obj.name = state.name;
            obj.description = state.description;
            obj.location = state.location;
            obj.image = state.image;
            obj.type = state.type;
            obj.serviceType = state.serviceType;
            obj.experience = state.experience;
            obj.cost = state.cost;
            obj.workShedule = state.workShedule;
            break;
    }
    console.log(obj);
    return obj;
}

export default createObject;
