/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from 'axios';
import { Restaurant, RestaurantForm } from './types/restaurant';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

const handleResponseData = <T,>(response: AxiosResponse<T>) => response.data;

const restaurant = {
  getAllRestaurants: (): Promise<Restaurant[]> =>
    axiosInstance.get('/Restaurant').then(handleResponseData),
  addRestaurant: (restaurantData: RestaurantForm): Promise<Restaurant> =>
    axiosInstance.post('/Restaurant', restaurantData).then(handleResponseData),
  getRestaurantById: (id: string): Promise<Restaurant> =>
    axiosInstance.get(`/Restaurant/${id}`).then(handleResponseData),
  updateRestaurant: (
    id: string,
    restaurantData: Restaurant
  ): Promise<Restaurant> =>
    axiosInstance
      .put(`/Restaurant/${id}`, restaurantData)
      .then(handleResponseData),
  deleteRestaurant: (id: string): Promise<void> =>
    axiosInstance.delete(`/Restaurant/${id}`).then(handleResponseData),
};

export default restaurant;
