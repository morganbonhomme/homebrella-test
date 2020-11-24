import React from "react";
import Form from "react-bootstrap/Form";

const FormGroup = (props) => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.changed}/>
    </Form.Group>
  );
};

export default FormGroup;
