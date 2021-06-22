import React from "react";

function Signup() {
    return (
        <form>
            <label>
                New Username:
                <input type="text" name="newUser" />
            </label>            
            <label>
                New Password:
                <input type="text" name="newPass" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );    
}

export default Signup;