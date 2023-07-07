import React, { useState, useContext } from 'react';
import Todo from './Todo.jsx'

import { Context } from '../Context.jsx'

export default function TodoContainer() {

    const { todoList, setTodoList } = useContext(Context);
    const [userInput, setUserInput] = useState("");



    const removeTodo = (index) => {
      setTodoList((previosTodos) => previosTodos.filter((_, i) => i !== index));
    };



    const taskList = todoList.map((task, index) => (
        <Todo
          key={index}
          task={task}
          index={index}
          onDelete={removeTodo}
          />
    ))

    return (

        <div className="card container text-center mt-4" style={{ width: "22rem" }}>
          <ul className="list-group list-group-flush">
            <li className="mb-1 list-group-item">
              <input
                className="w-100 ps-3 border-0"
                type="text"
                placeholder="New task"
                value={userInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && userInput.trim() !== "") {
                    setTodoList((previosTodos) => [...previosTodos, userInput]);
                    setUserInput("");
                  }
                }}
                onChange={(e) => setUserInput(e.target.value)}
                style={{ height: "50px" }}
              />
            </li>
            {taskList}
            <li className="tasksLeft list-group-item">{todoList.length} tasks left</li>
          </ul>
        </div>
    );
};

