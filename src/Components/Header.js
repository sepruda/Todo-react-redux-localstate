import React from "react";

const Header = props => {
    return (
        <div className="p-3 mt-3 rounded">
            <h2 className="display-4">Huskeliste ({props.antal})</h2>
        </div>
    );
};

export default Header;
