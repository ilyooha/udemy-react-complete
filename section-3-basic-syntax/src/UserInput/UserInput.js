import React from "react";
import './userInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" value={props.username} onChange={props.usernameOnChange}/>
        </div>
    );
}

export default UserInput;
