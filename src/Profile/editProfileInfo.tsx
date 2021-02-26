import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Validators/TagsForValidators/tags";
import {required} from "../Validators/validator";
import {useDispatch, useSelector} from "react-redux";
import ContactsProfileForm from "./contactsProfileForm";
import {TypeInitialStateProfile, TypeResponseDataProfile, TypeStore} from "../Types/Types";
import {updateProfileInfoThunkCreator} from "../Redux/Reducers/profileReducer";

type TypeProfileInfo = {
    changeEditMode:()=>void
}

const EditProfileForm: React.FC<InjectedFormProps<TypeResponseDataProfile>> =
    ({handleSubmit}) =>{
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label><b>Full Name</b></label>
                <Field component={Input} validate={[required]} name={'fullName'}
                       placeholder={"Full Name"}/>
            </div>
            <div>
                <label><b>About me</b></label>
                <Field component={Input}  name={'aboutMe'}
                       placeholder={"AboutMe"}/>
            </div>
            <div>
                <label><b>Description my Job</b></label>
                <Field component={Input}  name={'lookingForAJobDescription'}
                       placeholder={"Description my job"}/>
            </div>
            <b>Contacts:</b>
            <ContactsProfileForm/>
            <div>
                <div>
                    <label><b>Looking job</b></label>
                    <Field component={"input"} type={"checkbox"} name={'lookingForAJob'}/>Find Job
                </div>
                <button>Send</button>
            </div>

        </form>
    </div>
}

const ProfileReduxForm = reduxForm<any>({form:'editProfile'})(EditProfileForm)





const EditProfileInfo:React.FC<TypeProfileInfo> = ({changeEditMode})=>{
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)

    const dispatch = useDispatch()
    const onSubmit = (formData: TypeResponseDataProfile) => {
        console.log(formData)
        dispatch(updateProfileInfoThunkCreator(formData))
        changeEditMode()
    }
    return <>
        <ProfileReduxForm initialValues={statePage.profile} onSubmit={onSubmit} />
        </>
}
export default EditProfileInfo;