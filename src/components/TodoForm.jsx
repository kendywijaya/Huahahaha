import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    if (value.length > 30) {
      alert("Please Create a shorter todo text!\nMax todo text:30");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className="add-btn --main-black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}></form>
      </section>
    );
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
