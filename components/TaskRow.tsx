import Todo from "../types/todo";
import styles from "../styles/TaskRow.module.css"

interface TaskRowProps {
  todo: Todo;
  setFinish(todo: Todo): void;
}

/**
 * タスク詳細表示
 * @param タスク
 * @returns タスク詳細
 */
export default function TaskRow({ todo, setFinish }: TaskRowProps) {
  return (
    <>
      <li className={styles.row}>
        <span>{todo.title}</span>
        <span>{todo.isFinished ? "完成" : "未完成"}</span>
        <span>{todo.createdAt.getFullYear()}/{todo.createdAt.getMonth() + 1}/{todo.createdAt.getDate()}</span>
        <button
          disabled={todo.isFinished}
          onClick={(e) => {
            setFinish(todo);
          }}>完了</button>
      </li>
    </>
  )
}