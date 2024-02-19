export interface Restaurant {
  id: number;
  address: string;
  menu: string;
  phone: string;
  name: string;
  addressLink: string;
  website: string;
}
export interface RestaurantDatabaseModel {
  id?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumber2?: string | null;
  website?: string | null;
  address?: string | null;
  menuLink?: string | null;
  socialLink?: string | null;
  socialLink2?: string | null;
  description?: string | null;
  createTime: string;
}

export interface RestaurantInsert {
  name: string;
  website: string;
  menuLink: string;
}
