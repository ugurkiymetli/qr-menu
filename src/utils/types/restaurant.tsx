export interface Restaurant {
  id: number;
  address: string;
  menu: string;
  phone: string;
  name: string;
  addressLink: string;
  website: string;
  imageLink: string;
  description: string;
}

export interface RestaurantForm {
  name: string;
  addressLink: string;
  menuLink: string;
  address?: string;
  phone?: string;
  website?: string;
}
