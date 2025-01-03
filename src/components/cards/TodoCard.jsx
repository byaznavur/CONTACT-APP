import React, { Component } from "react";

export class TodoCard extends Component {
  render() {
    const {
      name,
      surname,
      isFavorite,
      number,
      category,
      id,
      handleFavorite,
      handleDelete,
      handleEdit,
    } = this.props;

    return (
      <div
        className={`w-50 m-auto  mb-3 alert d-flex justify-content-between align-items-center flex-wrap alert-${
          isFavorite ? "danger" : "primary"
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
          <button onClick={() => handleEdit(id)} className="btn btn-primary">
            Edit
          </button>
          {isFavorite ? (
            <button onClick={() => handleDelete(id)} className="btn btn-danger">
              Delete
            </button>
          ) : (
            <button
              onClick={() => handleFavorite(id)}
              className="btn btn-warning"
            >
              Favorite
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default TodoCard;
