import next from "next";

import Todo from "../types/todo";
import TaskRow from "./TaskRow";

interface ListProps {
  todos: Todo[];
}

/**
 * todoタスクリスト表示
 * @param タスク配列 
 * @returns タスク一覧リスト
 */
export default function List({ todos }: ListProps) {
  const taskRows = todos.map((todo, index) => {
    return <TaskRow todo={todo} key={index} />
  })

  return (
    <ul>
      {taskRows}
    </ul>
  )
}