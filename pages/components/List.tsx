import next from "next";

import Task from "../types/task";
import TaskRow from "./TaskRow";

interface ListProps {
    tasks: Task[];
}

/**
 * todoタスクリスト表示
 * @param タスク配列 
 * @returns タスク一覧リスト
 */
export default function List({tasks}: ListProps) {
    const taskRows = tasks.map((task, index) => {
        return <TaskRow task={task} />
    })
    return (
        <ul>
            {taskRows}
        </ul>
    )
}