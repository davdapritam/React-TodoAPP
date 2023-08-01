import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { useState, useEffect, Fragment } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => {
      return item !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let srNo = 0;
    if (todos.length === 0) {
      srNo = 1
    } else {
      srNo = todos[todos.length - 1].srNo + 1;
    }
    const myTodo = {
      srNo: srNo,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  // SetTodos is a method which will update todos 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={true} />
        <Routes>
          <Route path='/' element={[<AddTodo addTodo={addTodo} />, <Todos todos={todos} onDelete={deleteTodo} />]}>
          </Route>
          <Route path="/about" element={<About />} />
          {/* <About /> */}
          {/* </Route> */}

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
