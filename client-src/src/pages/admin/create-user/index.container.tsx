import React from "react"
import './style.css'
import { editUserType } from "./index.type"
import { useNavigate } from "react-router-dom";
import background from "../../../icons/bg.jpg";

const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const EditUserContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, handleSubmit2 }: editUserType) => {

    return (
        <>
               <form noValidate onSubmit={(e) => handleSubmit(e)} className="form">
                <h3 className="add-user">Edit User</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 padding">
                            <Input value={formvalues.firstName} title={'firstName'} name={'First Name'} submit={submit} type={'string'} changeValues={changeValues} />
                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.lastName} title={'lastName'} name={'Last Name'} submit={submit} type={'string'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.email} title={'email'} name={'Email ID'} submit={submit} type={'email'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.phone} title={'phone'} name={'Contact Number'} submit={submit} type={'number'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.password} title={'password'} name={'Password'} submit={submit} type={'password'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.confirmPassword} title={'confirmPassword'} name={'Confirm Password'} submit={submit} type={'password'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-12 padding">
                            <Button theme="outline-dark" handleSubmit={handleSubmit2} title={'Back'} />
                            <Button theme="outline-dark" handleSubmit={handleSubmit} title={'Add User'} />
                            </div>
                    </div>
                </div>
               
            </form>
        </>
    );
}

export default EditUserContainerComponent;