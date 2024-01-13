import React from "react"
import './style.css'
import { editUserType } from "./index.type"
import { useNavigate } from "react-router-dom";
const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const EditUserContainerComponent = ({ submit, handleSubmit, formvalues, changeValues , handleSubmit2}: editUserType) => {
   
    return (
        <div className="signupSection">

            <form noValidate onSubmit={(e) => handleSubmit(e)} className="signupForm" name="signupform">
                {/* <h2>Edit User</h2> */}
                <ul className="noBullet">
                    <li>
                        <Input value={formvalues.firstName} title={'firstName'} name={'First Name'} submit={submit} type={'string'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.lastName} title={'lastName'} name={'Last Name'} submit={submit} type={'string'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.email} title={'email'} name={'Email ID'} submit={submit} type={'email'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.phone} title={'phone'} name={'Contact Number'} submit={submit} type={'number'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.password} title={'password'} name={'Password'} submit={submit} type={'password'} changeValues={changeValues} />
                    </li>

                    <li id="center-btn">
                        <Button handleSubmit={handleSubmit2} title={'Cancel'} />
                        <Button handleSubmit={handleSubmit} title={'Update'} />
                    </li>

                </ul>
            </form>
        </div>
    );
}

export default EditUserContainerComponent;