/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse } from './types/auth';
import { Restaurant, RestaurantForm } from './types/restaurant';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

const handleResponseData = <T,>(response: AxiosResponse<T>) => response.data;

const auth = {
  login: (loginData: LoginRequest): Promise<LoginResponse> =>
    axiosInstance.post('/login', loginData).then(handleResponseData),
};

const restaurant = {
  getAllRestaurants: (): Promise<Restaurant[]> =>
    axiosInstance.get('/Restaurant').then(handleResponseData),
  addRestaurant: async (
    restaurantData: RestaurantForm,
    token: string | null
  ): Promise<Restaurant> => {
    const response = await axiosInstance.post('/Restaurant', restaurantData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponseData(response);
  },
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

export { auth, restaurant };
