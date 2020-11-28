import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../Common/FormsControls/FormsControls';
import style from "./../../Common/FormsControls/FormsControls.module.css"
const ProfileDataForm = ({ handleSubmit, profile,error }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full name: </b> {createField("Full Name", 'fullName', [], Input)}
        </div>
        <div>
            <b>AboutMe : </b> {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Looking for a job : </b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
            <b>My skills: </b> {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {      
                return <div key={key}>
                    {key} {createField(key, 'contacts.' + key, [], Input)}
                    {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
                </div>
                
            })}
        </div>
        <button>Save changes</button>
    </form>
};
export default reduxForm({ form: 'edit-profile' })(ProfileDataForm)