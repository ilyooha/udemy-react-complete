import React from "react";
import './userOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <span>{props.username}</span>
        </div>
    );
}

export default UserOutput;