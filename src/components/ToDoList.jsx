/* eslint-disable react/prop-types */
import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({
  todoData,
  addTodoHandler,
  hadleDeleteUpdate,
  hadleCompleteTodo,
  handleSave,
}) => {
  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleAddTodo = () => {
    if (isEdit && title.trim().length) {
      handleSave(title, editId);
      setIsEdit(false);
      setEditId(null);
    } else if (!isEdit && title.trim().length) {
      const todos = [...todoData];
      let todoId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const data = { id: todoId, title: title, isDone: false };
      addTodoHandler(data);
    } else {
      alert("Title Required");
    }
    setTitle("");
  };
  const deleteHandler = (id) => {
    hadleDeleteUpdate(id);
  };

  const isDoneHandler = (id, index) => {
    hadleCompleteTodo(id, index);
  };

  const editHadler = (data) => {
    setTitle(data.title);
    setIsEdit(true);
    setEditId(data.id);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w[100%] h-[100px] mt-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">
        <input
          className="w-[300px] h-[40px] outline-none rounded-lg pl-5 pr-5 placeholder:text-black bg-slate-300 focus:border-2 focus:border-red-300"
          type="text"
          placeholder="Add Task here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          className="bg-black text-white pl-5 pr-5 pt-2 pb-2 hover:bg-cyan-600 rounded-lg"
          onClick={handleAddTodo}
        >
          {isEdit ? "SAVE" : "ADD TODO"}
        </button>
      </div>

      <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-[400px] overflow-y-auto p-5 box-border">
        {todoData.map((todo, index) => (
          <ToDoItem
            todoData={todo}
            key={todo.id}
            deleteHandler={(id) => deleteHandler(id)}
            isDoneHandler={(id) => isDoneHandler(id, index)}
            editHadler={(data) => editHadler(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
