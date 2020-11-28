import React from 'react'
// import s from './Users.module.css'

import Paginator from '../Common/Paginator/Paginator'
import User from './User'


let Users = ({ currentPage, onPageChanged, totalItemsCount, pageSize, ...props }) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount} pageSize={pageSize} />
        <div>
            {
                props.users.map(u => <User user={u}
                    followingProgress={props.followingProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>

    </div>
}

export default Users