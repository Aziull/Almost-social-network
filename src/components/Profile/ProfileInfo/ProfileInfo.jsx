import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/avatar.jpg'

import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm  from './ProfileDataForm'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = formData => {
        props.saveProfile(formData)
        setEditMode(false)
    }
    return (
        <div>
            <img src={props.profile.photos.large || userPhoto} alt='' className={s.mainPhoto} />
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            {editMode ?
                <ProfileDataForm {...props} initialValues={props.profile} onSubmit={onSubmit} /> :
                <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />
            }
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
}
const ProfileData = (props) => {
    return <div>
        <div>
            <b>Full name: </b> {props.profile.fullName}
        </div>
        <div>
            <b>AboutMe : </b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job : </b> {!props.profile.lookingForAJob ? "no" : "yes"}
        </div>
        {
            props.profile.lookingForAJob &&
            <div>
                <b>My skills: </b> {props.profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
        {
            props.isOwner &&
            <button onClick={props.goToEditMode}>Edit profile</button>
        }
    </div>
}
export const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>{contactValue}</div>
}
export default ProfileInfo