//jshint esversion:7
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';
import "./entry.style.css";


export const Entry = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    // e is for the event change (keystrokes)
    const handleOnchange = e => {
        const {name, value} = e.target;

        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if(!email || !password) {
           return alert("PLease fill in the form.");
        }
        // TODO call api to submit the form
        console.log(email, password);
    };

    const handleOnResetSubmit = e => {
        e.preventDefault();

        if(!email) {
           return alert("PLease fill in the email address associated with your account.");
        }
        // TODO call api to submit the form
        console.log(email);
    };

    const formSwitcher = frmType => {
        setFrmLoad(frmType);
    }

    return (
        <div className="entry-page bg-info">
            <Alert className="form-box">
                {frmLoad === 'login' && <LoginForm 
                handleOnChange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                password={password}
                 />}

                {frmLoad ==='reset' && <ResetPassword 
                handleOnChange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                 />}
            </Alert>
        </div>
    );
};