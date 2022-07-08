import "./App.css";
import easyState from "./easyState";
import { useEffect } from "react";

function App() {
	let todos = easyState([]);
	let count = easyState(0);

	useEffect(() => {
		if (count.$ % 8 === 0) {
			alert(count.$ + " is a multiple of 8");
		}
	}, [count.effect]);

	return (
		<div className="App">
			<h1>Todo List</h1>
			<input
				type="text"
				placeholder="Add Todo"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						todos.$ = [...todos.$, e.target.value];
					}
				}}
			/>

			<ul>
				{todos.$.map((todo, index) => (
					<div key={index}>
						<li>{todo}</li>
						<button
							onClick={() => (todos.$ = todos.$.filter((_, i) => i !== index))}
						>
							Delete
						</button>
					</div>
				))}
			</ul>

			<p>The count is {count.$}</p>
			<button onClick={() => count.$++}>Increment</button>
		</div>
	);
}

export default App;
