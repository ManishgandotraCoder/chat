import React from "react"
import './style.css'
import { registerConvertorType } from "./index.type"
const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const LoginContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, message }: registerConvertorType) => {


    return (
        <div className="bg2">
            <form noValidate onSubmit={(e) => handleSubmit(e)} className="form-login">
                <h3 className="add-user">Login</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 padding">
                            <Input value={formvalues.email} title={'email'} name={'Email ID'} submit={submit} type={'string'} changeValues={changeValues} />
                        </div>
                        <div className="col-md-12 padding">
                            <Input value={formvalues.password} title={'password'} name={'Password'} submit={submit} type={'password'} changeValues={changeValues} />
                        </div>
                        <div className="col-md-12 padding">
                            {message}
                        </div>
                        <div className="col-md-12 padding">
                            <Button theme="outline-dark" handleSubmit={handleSubmit} title={'Login'} />
                        </div>

                        
                    </div>

                </div>

            </form>
        </div>

    );
}

export default LoginContainerComponent;