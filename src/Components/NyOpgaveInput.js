import React from "react";

//Formular til at oprette nye elementer
class NyOpgaveInput extends React.Component {
    constructor(props) {
        super(props);

        //Opretter local state objekt, som indeholder tekstinput-teksten
        this.state = {
            input_text: ""
        };

        //Bind vores egne funktioner til "this"
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            input_text: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.tilføjNyOpgave(data.get("opgavetekst"));
        this.setState({ input_text: "" });
    }

    render() {
        return (
            <form className="mb-4" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-8">
                        <input
                            className="form-control"
                            name="opgavetekst"
                            value={this.state.input_text}
                            type="text"
                            placeholder="skriv ny opgave"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <button
                            className="btn btn-block btn-outline-primary"
                            type="submit"
                        >
                            Tilføj{" "}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default NyOpgaveInput;
