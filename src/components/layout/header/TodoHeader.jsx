import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class TodoHeader extends Component {
  render() {
    return (
      <InputGroup className="my-3">
        <Form.Control placeholder="Search..." />
        <InputGroup.Text>
          <Form.Select aria-label="Default select example">
            <option>All</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    );
  }
}

export default TodoHeader;
