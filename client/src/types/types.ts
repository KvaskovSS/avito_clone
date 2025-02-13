export interface BaseItem {
    id: number;
    name: string;
    description: string;
    location: string;
    type: 'Недвижимость' | 'Авто' | 'Услуги';
    image: string;
  }
  
  export interface RealEstateItem extends BaseItem {
    propertyType: string;
    area: number;
    rooms: number;
    price: number;
  }
  
  export interface AutoItem extends BaseItem {
    brand: string;
    model: string;
    year: number;
    mileage?: number;
  }
  
  export interface ServiceItem extends BaseItem {
    serviceType: string;
    experience: number;
    cost: number;
    workSchedule?: string;
  }
  
  export type Item = RealEstateItem | AutoItem | ServiceItem;