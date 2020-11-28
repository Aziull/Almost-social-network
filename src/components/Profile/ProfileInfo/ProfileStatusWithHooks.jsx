import React, { useState, useEffect } from 'react'


// import s from './ProfileInfo.module.css'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(status)
    },[props, status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            { !editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
                </div>
                :
                <div>
                    
                    <input type="text" autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </>
    );

}
export default ProfileStatusWithHooks