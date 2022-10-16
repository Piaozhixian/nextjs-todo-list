import next from "next";

import { useState } from "react";
import Task from "../types/task";

export default function Form() {
	const emptyTask: Task = {
		title: '',
		status: 'todo',
		createdAt: new Date()
	};

	const [tasks, setTasks] = useState<Task[]>([]);
	const [tmpTask, setTmpTask] = useState<Task>(emptyTask);

	const addTask = () => {
		setTasks([...tasks, tmpTask]);
		setTmpTask(emptyTask);
	};
	return (
		<div className="form">
			<input
				type="text"
				name="todo"

				onChange={e => setTmpTask({ title: e.target.value, status: 'todo', createdAt: new Date() })}
				value={tmpTask.title}
			/>
			<button onClick={addTask}>Add</button>
		</div>
	)
}