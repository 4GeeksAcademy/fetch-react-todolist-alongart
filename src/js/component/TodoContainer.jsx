import React, { useState, useContext } from 'react';
import Todo from './Todo.jsx'

import { Context } from '../Context.jsx'

export default function TodoContainer() {

    const { todoList, setTodoList } = useContext(Context);
    const [userInput, setUserInput] = useState("");

    // const onChangeHandler = (event) => setUserInput(event.target.value);

    const removeTodo = (index) => {
      setTodoList((previosTodos) => previosTodos.filter((_, i) => i !== index));
    };

    // const addTodoHandler = (event) => {

    //     if (event.key === 'Enter') {
    //         setTodoList([...todoList, userInput]);
    //         setUserInput("");
    //     }
    // }

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

        // <div className="card container text-center mt-4">
            
        //     <form onSubmit={(e) => e.preventDefault()}>
        //         <input
        //             value={userInput}
        //             onChange={onChangeHandler}
        //             onKeyUp={addTodoHandler}

        //         />
        //     </form>

        //     {todoList.map((todo, index) => <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />)}
        // </div>