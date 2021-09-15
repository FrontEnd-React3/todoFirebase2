import { link } from "fs";
import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "./firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // when the App loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection("todos")
      // .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data().todo))
      });
  }, []);
  const addTodo = event => {
    event.preventDefault();
    // don't refresh the page when we hit the btn
    db.collection("todos").add({
      todo: input,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    // setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hi</h1>
      <form action="">
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>

      {/* 
      <GlobalStyle />
      <Button>Primary Btn</Button>
      <Button secondary>Secondary Btn</Button>
      <Button disabled>Disabled Btn</Button>
      <Button large>Large Btn</Button> */}
    </div>
  );
}

export default App;
