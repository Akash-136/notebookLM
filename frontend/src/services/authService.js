import { apiRequest } from './api';

export const register = async (userData) => {
  return apiRequest('/users/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const login = async (userData) => {
  return apiRequest('/users/login', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};