interface Task {
    title: string;
    status: 'todo' | 'done';
    createdAt: Date;
}

export default Task;