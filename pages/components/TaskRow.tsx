import next from "next";

import Todo from "../types/todo";

interface TaskRowProps {
    todo: Todo;
}

/**
 * タスク詳細表示
 * @param タスク
 * @returns タスク詳細
 */
export default function TaskRow({ todo }: TaskRowProps) {
    return (
        <li className="task-row">
            <span>{todo.title}</span>
            <span>{todo.isFinished}</span>
            <span>{todo.createdAt.toString()}</span>
        </li>
    )
}