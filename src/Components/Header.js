import React from "react";

const Header = props => {
    return (
        <div className="p-3 mt-3">
            <h1 className="h1">To-Do List</h1>
            <h3 className="h3">Tasks: {props.antal}</h3>
        </div>
    );
};

export default Header;
