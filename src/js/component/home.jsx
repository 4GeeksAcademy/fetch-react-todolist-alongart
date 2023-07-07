import React from "react";
import TodoContainer from "./TodoContainer.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<div className="row text-center m-3 align-items-center" style={{height: 100+"px"}}>
				<h1 className="todosTitle">To-dos</h1>
			</div>
			<TodoContainer />
		</div>
	);
};

export default Home;