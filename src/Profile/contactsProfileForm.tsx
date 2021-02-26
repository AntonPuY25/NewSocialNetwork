import React from 'react';
import {useSelector} from "react-redux";
import {TypeInitialStateProfile, TypeStore} from "../Types/Types";
import {Field} from "redux-form";
import {Input} from "../Validators/TagsForValidators/tags";

const ContactsProfileForm = ()=> {
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)

    return <>
        {Object.keys(statePage.profile.contacts).map(key => {
            return <div key={key}>
                <label><b>{key}</b></label>
                <Field component={Input}  name={`contacts.${key}`}
                       placeholder={key}/>
            </div>

        })}
    </>
}
export default ContactsProfileForm;