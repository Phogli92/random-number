import React from "react";
import './button.css'


function Button(props) {
    return (
        <div className="buttons">
            <button className="btn" onClick={props.again}>
                <span></span>
                <p
                    data-start="good luck!"
                    data-text="start!"
                    data-title="new game"
                ></p>
            </button>
        </div>
    );
}

export default Button;