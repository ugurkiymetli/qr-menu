/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from 'axios';
import { RestaurantDatabaseModel, RestaurantInsert } from './types/restaurant';

const baseURL = process.env.REACT_APP_BASE_URL;

console.log({ baseURL });

const axiosInstance = axios.create({
  baseURL,
});

const handleResponseData = <T,>(response: AxiosResponse<T>) => response.data;

const restaurant = {
  getAllRestaurants: (): Promise<RestaurantDatabaseModel[]> =>
    axiosInstance.get('/Restaurant').then(handleResponseData),
  addRestaurant: (
    restaurantData: RestaurantInsert
  ): Promise<RestaurantDatabaseModel> =>
    axiosInstance.post('/Restaurant', restaurantData).then(handleResponseData),
  getRestaurantById: (id: string): Promise<RestaurantDatabaseModel> =>
    axiosInstance.get(`/Restaurant/${id}`).then(handleResponseData),
  updateRestaurant: (
    id: string,
    restaurantData: RestaurantDatabaseModel
  ): Promise<RestaurantDatabaseModel> =>
    axiosInstance
      .put(`/Restaurant/${id}`, restaurantData)
      .then(handleResponseData),
  deleteRestaurant: (id: string): Promise<void> =>
    axiosInstance.delete(`/Restaurant/${id}`).then(handleResponseData),
};

export default restaurant;
