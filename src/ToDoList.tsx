import {useState} from "react";

function TodoList() {

	const [tasks, setTasks] = useState(["Test", "Test2", "Test 3"]);
	const [newTask, setNewTask] = useState("");


	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setNewTask(e.target.value);
	}

	function addTask() {
		if(newTask.trim().length > 0){
			setTasks(t => [...t, newTask]);
			setNewTask("");
		}
	}

	function deleteTask(index: number) {

	}

	function moveTaskUp(index: number) {

	}

	function moveTaskDown(index: number) {

	}

	return (
		<>
			<div className="flex flex-col justify-center items-center bg-indigo-400 h-screen text-gray-200">
				<h1 className="font-bold text-2xl">To-Do list</h1>
				<div className="flex flex-col justify-center items-center max-h-fit min-h-1/2 border-2 border-black w-1/2 gap-4">

					<div className="">
						<input
							className="border-2 border-base-100"
							type="text"
							placeholder="Add a new task"
							value={newTask}
							onChange={handleInputChange}
						/>
						<button onClick={addTask} className="mx-4 bg-green-500 btn btn-primary">Add</button>
					</div>

					<ol className="">
						{tasks.map((task, index: number) =>
							<li key={index}
								className="grid grid-cols-4 gap-4 m-2 border-2 border-black">
								<span className="bg-base-200 text-black">{task}</span>
								<button
									onClick={() => deleteTask(index)}
									className="bg-red-500 btn btn-primary border-2">
									Delete task
								</button>
								<button
									onClick={() => moveTaskUp(index)}
									className="bg-blue-400 btn btn-primary">Task up
								</button>
								<button
									onClick={() => moveTaskDown(index)}
									className="bg-blue-400 btn btn-primary">Task down
								</button>
							</li>
						)}
					</ol>

				</div>
			</div>
		</>
	)
}

export default TodoList;