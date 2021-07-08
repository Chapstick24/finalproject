import React, { useRef } from "react";
import API from '../utils/API';

const SignUpForm = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    //const [state, dispatch] = useStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch({type: 'LOADING'});
        console.log(firstNameRef.current.value)
        console.log(lastNameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        API.saveUser({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        .then((result) => {
            console.log(result)
            // dispatch({
            //     type:'ADD USER',
            //     post: result.data,
            // });
        })
        .catch(err => console.log(err));

        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    required
                    ref={firstNameRef}
                    id="firstName"
                    placeholder="First name" 
                />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    required
                    ref={lastNameRef}
                    id="lastName"
                    placeholder="Last name" 
                />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    required
                    ref={emailRef}
                    id="email"
                    placeholder="Enter email" 
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    required
                    ref={passwordRef}
                    id="password"
                    placeholder="Enter password" 
                />
            </div>

            <a type="submit" className="btn btn-primary btn-block" href="/add" >Sign Up</a>
            <p className="forgot-password text-right">
                Already registered <a href="/add">Sign in?</a>
            </p>
        </form>
    );
}

export default SignUpForm;