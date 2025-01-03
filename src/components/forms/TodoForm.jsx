import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { validate } from "uuid";

export class TodoForm extends Component {
  render() {
    const { data, submit, handleData, selected, validated } = this.props;

    return (
      <Form
        validated={validated}
        onSubmit={submit}
        noValidate
        className="w-50 m-auto"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleData}
            value={data.name}
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            onChange={handleData}
            value={data.surname}
            required
            type="text"
            placeholder="Surname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            onChange={handleData}
            value={data.number}
            required
            type="number"
            placeholder="Phone Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categories</Form.Label>
          <Form.Select
            onChange={handleData}
            value={data.category}
            aria-label="Default select example"
          >
            <option>All</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Button className="w-100 my-3" type="submit">
          {selected === null ? "  Add Contact" : "Save Contact"}
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
