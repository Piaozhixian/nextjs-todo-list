import type { NextPage } from 'next'
import { useState } from 'react'
import List from './components/List';
import Form from './components/Form';
import Todo from './types/todo';

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos([...todos, { title: title, isFinished: false, createdAt: new Date() }]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} />
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};


export default Home
