import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todoData, setTodoData] = useState([]);

  const addTodoHandler = (data) => {
    const list = [...todoData];
    setTodoData([...list, data]);
  };

  const hadleDeleteUpdate = (id) => {
    const newList = todoData.filter((todo) => todo.id != id);
    setTodoData(newList);
  };

  const hadleCompleteTodo = (id, index) => {
    const newList = [...todoData];
    newList[index].isDone = !newList[index].isDone;
    setTodoData(newList);
  };

  const handleSave = (newTitle, id) => {
    const newList = todoData.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodoData(newList);
  };

  return (
    <>
      <Header />
      <ToDoList
        todoData={todoData}
        addTodoHandler={(data) => addTodoHandler(data)}
        hadleDeleteUpdate={(id) => hadleDeleteUpdate(id)}
        hadleCompleteTodo={(id, index) => hadleCompleteTodo(id, index)}
        handleSave={(data, id) => handleSave(data, id)}
      />
    </>
  );
}

export default App;
