import React from "react";
import NyOpgaveInput from "./NyOpgaveInput";
import Opgave from "./Opgave";
import { SortableContainer } from "react-sortable-hoc";

//TODO Functional komponent
const Todo = props => (
    <div className="mt-1 p-3  todo">
        <NyOpgaveInput tilføjNyOpgave={props.tilføjNyOpgave} />
        <OpgaveListe
            onSortEnd={props.nySortering}
            todo={props.todo}
            fjernOpgave={props.fjernOpgave}
            faerdigOpgave={props.faerdigOpgave}
            pressDelay={200}
        />
    </div>
);

const OpgaveListe = SortableContainer(props => {
    return (
        <ul className="list-group rounded">
            {props.todo.map((opgave, index) => (
                <Opgave
                    key={opgave.opgaveid}
                    tekst={opgave.opgavetekst}
                    faerdig={opgave.completed}
                    opgaveid={opgave.opgaveid}
                    fjernOpgave={props.fjernOpgave}
                    index={index}
                    faerdigOpgave={props.faerdigOpgave}
                />
            ))}
        </ul>
    );
});

export default Todo;
