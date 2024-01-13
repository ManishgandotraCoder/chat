import React from "react"
import './style.css'
import { registerConvertorType } from "./index.type"
const Input = React.lazy(() => import("../../../components/input"));
const Button = React.lazy(() => import("../../../components/button"));

const LoginContainerComponent = ({ submit, handleSubmit, formvalues, changeValues }: registerConvertorType) => {
    

    return (
        <div className="signupSection">

            <form noValidate onSubmit={(e) => handleSubmit(e)} className="signupForm" name="signupform">
                <h2>Login</h2>
                <ul className="noBullet">
                    <li>
                        <Input value={formvalues.email} title={'email'} name ={'Email ID'} submit={submit} type={'string'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.password} title={'password'} name = {'Password'} submit={submit} type={'password'} changeValues={changeValues} />
                    </li>
                    
                    <li id="center-btn">
                        <Button theme="outline-light" handleSubmit={handleSubmit} title={'Login'}/>
                    </li>
                    
                </ul>
            </form>
        </div>
    );
}

export default LoginContainerComponent;