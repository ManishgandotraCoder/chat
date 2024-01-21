import React from "react"
import './style.css'
import { editUserType } from "./index.type"
const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const EditUserContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, handleSubmit2 }: editUserType) => {

    return (
        <form noValidate onSubmit={(e) => handleSubmit(e)} className="form">
            <h3 className="add-user">Edit {formvalues.firstName} {formvalues.lastName}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 padding">
                        <Input disabled ={false} min={3} value={formvalues.firstName} title={'firstName'} name={'First Name'} submit={submit} required={true} type={'string'} changeValues={changeValues} />
                    </div>
                    <div className="col-md-6 padding">
                        <Input disabled ={false} min={3} value={formvalues.lastName} title={'lastName'} name={'Last Name'} submit={submit} required={true} type={'string'} changeValues={changeValues} />

                    </div>

                    <div className="col-md-6 padding">
                        <Input disabled  min={0} value={formvalues.email} title={'email'} name={'Email ID'} submit={submit} required={true} type={'email'} changeValues={changeValues} />

                    </div>

                    <div className="col-md-6 padding">
                        <Input disabled ={false} min={10} value={formvalues.phone} title={'phone'} name={'Contact Number'} submit={submit} required={true} type={'number'} changeValues={changeValues} />

                    </div>
                    <div className="col-md-6 padding">
                        <Input disabled ={false} min={5} value={formvalues.password} title={'password'} name={'Password'} submit={submit} required={true} type={'password'} changeValues={changeValues} />

                    </div>
                    <div className="col-md-12 padding">
                        <Button theme="outline-dark" handleSubmit={handleSubmit2} title={'Cancel'} />
                        <Button theme="outline-dark" handleSubmit={handleSubmit} title={'Update'} />
                    </div>
                </div>
            </div>

        </form>
    );
}

export default EditUserContainerComponent;