import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class TodoForm extends Component {
  render() {
    const { submit } = this.props;
    return (
      <Form onSubmit={submit} noValidate className="w-50 m-auto">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control required type="text" placeholder="Surname" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Surname</Form.Label>
          <Form.Control required type="number" placeholder="Phone Number" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categories</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>All</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Button className="w-100 my-3" type="submit">
          Add Contact
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
