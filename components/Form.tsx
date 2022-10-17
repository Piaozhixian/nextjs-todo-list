import { useState } from "react";

interface FormProps {
	addTodo(title: string): void;
}

/**
 * タスク入力フォーム
 * @param タスク追加メソッド
 * @returns タスク入力フォームエレメント
 */
export default function Form({ addTodo }: FormProps) {
	const [tmpTitle, setTmpTitle] = useState<string>("");

	return (
		<div className="form">
			<input
				type="text"
				name="todo"
				onChange={(e) => {
					setTmpTitle(e.currentTarget.value)
				}}
				value={tmpTitle}
			/>
			<button onClick={(e) => {
				addTodo(tmpTitle);
				setTmpTitle('');
			}}>Add</button>
		</div>
	)
}