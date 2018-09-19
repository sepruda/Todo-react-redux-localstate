import React from "react";
import { SortableElement } from "react-sortable-hoc";

const Opgave = SortableElement(props => {
    const text_style = {
        fontFamily: "sans-serif",
        color: "gray",
    };

    return (
        <li className="list-group-item ">
            <div className=" d-flex w-100 justify-content-between align-items-stretch">
                <span
                    onClick={function() {
                        props.faerdigOpgave(props.opgaveid);
                    }}
                >
                    {props.faerdig ? (
                        <del style={text_style}>{props.tekst}</del>
                    ) : (
                        <span>{props.tekst}</span>
                    )}
                </span>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={function() {
                        props.fjernOpgave(props.opgaveid);
                    }}
                >
                    Remove
                </button>
            </div>
        </li>
    );
});

export default Opgave;
