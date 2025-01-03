import React, { Component } from "react";

export class TodoCard extends Component {
  render() {
    const { name, surname, isFaforite, number, category } = this.props;

    return (
      <div
        className={`w-50 m-auto mb-3 alert d-flex justify-content-between align-items-center alert-${
          isFaforite ? "danger" : "primary"
        }`}
      >
        <div>
          <h4>
            {name} {surname}
          </h4>
          <p className="badge bg-success p-2">{number}</p> |{" "}
          <strong className="badge bg-warning p-2">{category}</strong>
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-primary">Edit</button>
          {isFaforite ? (
            <button className="btn btn-danger">Delete</button>
          ) : (
            <button className="btn btn-warning">Favorite</button>
          )}
        </div>
      </div>
    );
  }
}

export default TodoCard;
