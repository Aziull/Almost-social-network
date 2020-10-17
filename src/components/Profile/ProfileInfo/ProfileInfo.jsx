import React from 'react'
import s from './ProfileInfo.module.css'

import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9P72qc0tQJD-gL7SmW6l5fo-D1naUm57xRQ&usqp=CAU" alt='' />
            </div>
            
            <img src={ props.profile.photos.large } alt='' />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
export default ProfileInfo