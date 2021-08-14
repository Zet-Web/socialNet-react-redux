import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setTotalUsersCount,
  toggleFollowingProgress,
  toggleIsFetching,
  getUsers,
  unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
            unFollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

/*
let withRedirect = withAuthRedirect(UsersContainer);
export default withAuthRedirect(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
  })(withRedirect)
);
*/

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
