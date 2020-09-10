import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9P72qc0tQJD-gL7SmW6l5fo-D1naUm57xRQ&usqp=CAU" alt="" />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
}
export default ProfileInfo