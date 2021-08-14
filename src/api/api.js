import * as axios from 'axios';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e9184a03-f357-47a6-bd16-138e33d95334',
    // 'API-KEY': '39c42902-0f67-4bf6-97f0-3a5aa80ffae5',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followQuery(userId) {
    return instance
      .post(`${baseUrl}follow/${userId}`)
      .then((response) => response.data);
  },
  unfollowQuery(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI');
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
