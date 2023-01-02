import React, { useState } from "react";
import classes from "../todo.module.css";

export default function Form(props) {
  const { todoList, setTodoList } = props;

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { title, isDone: false }]);
    setTitle(""); // new
  };

  return (
    <div className={classes.formWrapper}>
      <h3>Список</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Внесите данные"
          name="title"
          type="text"
          required
          value={title} // new
        />
        <button>Создать</button>
      </form>

      {/* <pre>{JSON.stringify(todoList, 0, 2)}</pre> */}
    </div>
  );
}