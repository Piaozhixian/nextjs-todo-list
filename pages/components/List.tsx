import Todo from "../types/todo";
import TaskRow from "./TaskRow";
import styles from "../../styles/List.module.css"

interface ListProps {
  todos: Todo[];
  setFinish(todo: Todo): void;
}

/**
 * todoタスクリスト表示
 * @param タスク配列 
 * @returns タスク一覧リスト
 */
export default function List({ todos, setFinish }: ListProps) {
  const taskRows = todos.map((todo, index) => {
    return <TaskRow todo={todo} key={index} setFinish={setFinish} />
  })

  return (
    <ul>
      <li className={styles.title}>
        <span>タスク名</span>
        <span>ステータス</span>
        <span>期日</span>
        <span></span>
      </li>
      {taskRows}
    </ul>
  )
}