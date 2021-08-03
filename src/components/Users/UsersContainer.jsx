import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  unFollow,
} from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../api/api';

/*{
id: 1,
photoUrl:
    'https://i0.wp.com/novocom.top/image/d2luabGluZGVscG9ubGluZS5jb20=/blog/wp-content/uploads/2017/12/user.png',
followed: false,
fullName: 'Zet',
status: 'I am a BOSS',
location: {
  city: 'Tashkent',
  country: 'Uzbekistan',
},*/
class UsersContainer extends Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      getUsers();
    }
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      debugger;
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount / 250);
      this.props.toggleIsFetching(false);
    });
    // console.log(this.props.users);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};*/
export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
