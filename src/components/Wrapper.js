import React from "react";

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className="thumbnail">
                <img src="../../public/logo512.png" alt=""/>
            </div>
            {props.children}
        </div>
    );
}

export default Wrapper;