import * as axios from 'axios';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const isntance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e9184a03-f357-47a6-bd16-138e33d95334',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return isntance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followQuery(userId) {
    return axios
      .post(
        `${baseUrl}follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            'API-KEY': 'e9184a03-f357-47a6-bd16-138e33d95334',
          },
        }
      )
      .then((response) => response.data);
  },
  unfollowQuery(userId) {
    return isntance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
export const getUsers = (currentPage = 1, pageSize = 10) => {
  return isntance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const followQuery = (userId) => {
  return axios
    .post(
      `${baseUrl}/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          'API-KEY': 'e9184a03-f357-47a6-bd16-138e33d95334',
        },
      }
    )
    .then((response) => response.data);
};

export const unfollowQuery = (userId) => {
  return isntance.delete(`/follow/${userId}`).then((response) => response.data);
};
/*

getUsers(pageNumber = this.props.currentPage) {
  this.props.toggleIsFetching(true);
  getUsers().then((response) => {
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount / 250);
    this.props.toggleIsFetching(false);
  });
}*/
