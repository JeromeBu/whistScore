import React from "react";
import { Form } from ".";

class FormContainer extends React.Component {
  state = {
    loading: true,
    inputs: [],
  };

  componentDidMount() {
    fetch("https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json")
      .then(response => response.json())
      .then(json => {
        console.log("Data fetched : ", json);
        this.setState({
          inputs: json,
          loading: false,
        });
      });
  }

  // const title = "Le titre du formulaire"
  // const validateLabel = "Envoyer"
  // const cancelable = true
  // const fields = [
  //   { id: "001", label: "Prénom" },
  //   { id: "002", label: "Nom" },
  //   { id: "003", label: "BlaBla" }
  // ]

  render() {
    const actions = {
      validate: "Envoyer le formulaire",
    };
    if (this.state.loading === true) {
      return <p>Chargement du formulaire ...</p>;
    }
    return <Form inputs={this.state.inputs} actions={actions} />;
  }
}

export default FormContainer;
