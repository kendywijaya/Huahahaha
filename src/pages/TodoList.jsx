import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoForm/TodoForm";
import Todos from "../components/todos/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning Styling in React!", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Only 10 todos is allowes");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  const clearTodos = () => !showAdd && setTodos([]);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
