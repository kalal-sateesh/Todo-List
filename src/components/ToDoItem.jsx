/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import complete from "../assets/Images/completed.png";
import wrong from "../assets/Images/wrong.png";

const ToDoItem = ({
  todoData,
  deleteHandler,
  isDoneHandler,
  editHadler,
}) => {
  const handleDelete = () => {
    deleteHandler(todoData.id);
  };

  const handleIsDone = () => {
    isDoneHandler(todoData.id);
  };
  const handleIsEdit = () => {
    editHadler(todoData);
  };
  return (
    <div
      className={`w-[100%] h-16 ${
        todoData.isDone ? `bg-green-600` : `bg-black`
      } text-white flex justify-between items-center p-5 box-border rounded-lg mt-5`}
    >
      <div
        className={`text-xl w-[50%] h-[100%] flex items-center overflow-hidden ${
          todoData.isDone ? `line-through` : ``
        }`}
      >
        {todoData.title}
      </div>
      <div className="w-[50%] flex items-center justify-between">
        <FaEdit
          className="w-[30px] h-[30px] cursor-pointer hover:text-orange-300 transition-all duration-300"
          onClick={handleIsEdit}
        />
        <MdDelete
          className="w-[30px] h-[30px] cursor-pointer hover:text-red-500 transition-all duration-300"
          onClick={handleDelete}
        />
        {todoData.isDone ? (
          <img
            src={wrong}
            alt="Wrong-tick"
            className="w-[35px] h-[35px] cursor-pointer hover:bg-red-400 transition-all duration-300 rounded-full"
            onClick={handleIsDone}
          />
        ) : (
          <img
            src={complete}
            alt="Right-tick"
            className="w-[35px] h-[35px] cursor-pointer hover:bg-green-400 transition-all duration-300 rounded-lg"
            onClick={handleIsDone}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
