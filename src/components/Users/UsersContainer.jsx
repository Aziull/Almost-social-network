import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, toggleFollowingProgress, follow, unfollow, requestUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { getPageSize, getTotalUsersCount, getCurrentPage, getUsers, getIsFetching, getFollowingProgress } from '../../redux/users-selectors'



class UsersComponent extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalItemsCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingProgress={this.props.followingProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => ({

//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingProgress: state.usersPage.followingProgress

// })
let mapStateToProps = (state) => ({

    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)

})

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })(UsersComponent)