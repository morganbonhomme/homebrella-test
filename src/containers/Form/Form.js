import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "../../components/FormGroup/FormGroup";

class ProductForm extends Component {
  state = {
    inputFields: {
      name: "",
      price: "",
      category: "",
    },
  };


  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.inputFields);
    const inputFields = {
      name: "",
      price: "",
      category: "",
    };
    this.setState({inputFields})
  }
  onChange = (event, key) => {
    const inputFields = {...this.state.inputFields};
    inputFields[key] = event.target.value;
    this.setState({inputFields})
  }
  render() {
    let inputFields = Object.keys(this.state.inputFields);

    let formGroups = inputFields.map((key) => (
      <FormGroup
        key={key}
        name={key}
        type={key}
        label={key}
        placeholder={`Enter the ${key}`}
        value={this.state.inputFields[key]}
        changed={(event) => { this.onChange(event, key)}}
      ></FormGroup>
    ));

    return (
      <Form onSubmit={this.onSubmit}>
        {formGroups}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ProductForm;
