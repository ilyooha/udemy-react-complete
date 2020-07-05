import React from "react";
import './char.css';

const Char = props => {
    return (
        <span className="CharComponent" onClick={e => {
            e.preventDefault();
            props.charRemovedHandler(props.index);
        }}>{props.letter}</span>
    );
}

export default Char;