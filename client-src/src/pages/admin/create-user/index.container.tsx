import React from "react"
import './style.css'
import { editUserType } from "./index.type"

const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const EditUserContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, handleSubmit2, message }: editUserType) => {

    return (
        <>
            <form noValidate onSubmit={(e) => handleSubmit(e)} className="form">
                <h3 className="add-user">Add User</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 padding">
                            <Input value={formvalues.firstName} min={3} title={'firstName'} name={'First Name'} required = {true} submit={submit} type={'string'} changeValues={changeValues} />
                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.lastName} min={3} title={'lastName'} name={'Last Name'} required = {true} submit={submit} type={'string'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.email} min={0} title={'email'} name={'Email ID'} required = {true} submit={submit} type={'email'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.phone} min={10} title={'phone'} name={'Contact Number'} required = {true} submit={submit} type={'number'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.password} min={5} title={'password'} name={'Password'} required = {true} submit={submit} type={'password'} changeValues={changeValues} />

                        </div>
                        <div className="col-md-6 padding">
                            <Input value={formvalues.confirmPassword} min={5} title={'confirmPassword'} name={'Confirm Password'} required = {true} submit={submit} type={'password'} changeValues={changeValues} />

                        </div>

                        <div className="col-md-12 padding" >
                            {message}
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