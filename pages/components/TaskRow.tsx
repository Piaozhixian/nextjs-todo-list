import next from "next";

import Task from "../types/task";

interface TaskRowProps {
    task: Task;
}

/**
 * タスク詳細表示
 * @param タスク
 * @returns タスク詳細
 */
export default function TaskRow({task}: TaskRowProps) {
    return (
        <li className="task-row">
            <span>{task.title}</span>
            <span>{task.status}</span>
            <span>{task.createdAt.toString()}</span>
        </li>
    )
}