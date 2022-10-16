import type { NextPage } from 'next'
import { useState } from 'react'
import Task from './types/task'
import List from './components/List';
import Form from './components/Form';

const Home: NextPage = () => {
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
    <>
      <h1>Todo List</h1>
      <Form />
      <List tasks={tasks} />
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
