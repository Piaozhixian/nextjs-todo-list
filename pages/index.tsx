import type { NextPage } from 'next'
import { useState } from 'react'
import List from '../components/List';
import Form from '../components/Form';
import Todo from '../types/todo';
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos([...todos, { title: title, isFinished: false, createdAt: new Date() }]);
  };

  const setFinish = (todo: Todo) => {
    const newTodos = todos.map((t) => {
      return t === todo ? { ...t, isFinished: true } : t
    })
    setTodos(newTodos);
  }

  return (
    <div className={styles.main}>
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} setFinish={setFinish} />
    </div>
  );
};


export default Home
