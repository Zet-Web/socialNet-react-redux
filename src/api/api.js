import * as axios from 'axios';
export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data);
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
