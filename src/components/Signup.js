import React, { Component } from "react";
// import API from "../utils/api"

export default class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }

    handleInputChange = event => {
        // Get value and name of the input
    const { name, value } = event.target;
    // Update states with current input(s)
    this.setState({
        [name]: value 
     })
    }
    render() {
        return (
            <form>
                <h3>Hello!! Please Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        );
    }
}