import React from "react";

const Button = ({api_call}) => {
    return (
        <div>
            <button onClick={api_call}></button>
        </div>
    );
}

export default Button;