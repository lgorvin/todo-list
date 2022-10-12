import React from "react";
import "./App.css";
import img1 from "./assets/images/bg-mobile-dark.jpg";
import img2 from "./assets/images/bg-desktop-dark.jpg";

function Todo({ todo, index, completeTodo, removeTodo }) {
  console.log(completeTodo);
  return (
    <div className="mt-4">
      <div className="bgColor1 border-b-[1px] py-4 rounded-lg shadow-md shadow-slate-700 mx-4 lg:mx-20 grid grid-cols-5 grid-rows-none gap-2">
        <button
          className={
            todo.isCompleted
              ? "w-[25px] h-[25px] ml-6 lg:ml-28 bgGradient rounded-full border-2"
              : "w-[25px] h-[25px] ml-6 lg:ml-28 rounded-full border-2"
          }
          onClick={() => completeTodo(index)}
        >
          {todo.isCompleted ? (
            <svg
              className="ml-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
            >
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          ) : (
            <div></div>
          )}
        </button>
        <div
          className="col-span-3 text-white lg:text-2xl duration-200"
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "",
            color: todo.isCompleted ? "gray" : "",
          }}
        >
          {todo.text}
          <div className="float-right mr-[-40px] lg:mr-[-90px]">
            <button onClick={() => removeTodo(index)}>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className=" mt-6 flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="px-6 py-2 lg:px-32 text-center rounded-md"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  let completedCounter = 0;

  function completedNum() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].isCompleted) {
        completedCounter++;
      }
    }
    return completedCounter;
  }

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-white absolute mt-20 lg:mt-32 text-4xl md:text-5xl lg:text-7xl font-bold duration-200">
          TO DO
        </h1>
        <img alt="img1" className="lg:hidden" src={img1} />
        <img alt="img2" className="hidden lg:block" src={img2} />
      </div>
      <div className="mt-[-50px]">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>

      <h1 className="text-white ml-4 lg:ml-20 mt-4">
        Tasks Completed: {completedNum()}/{todos.length}
      </h1>
    </div>
  );
}

export default App;
