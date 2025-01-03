import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class TodoHeader extends Component {
  render() {
    const { handleSearch, searchRef, category, handleCategory } = this.props;
    return (
      <InputGroup className="my-3 w-50 m-auto">
        <Form.Control
          onChange={handleSearch}
          ref={searchRef}
          placeholder="Search..."
        />
        <InputGroup.Text>
          <Form.Select
            aria-label="Default select example"
            onChange={handleCategory}
            value={category}
          >
            <option value="all">All</option>
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
