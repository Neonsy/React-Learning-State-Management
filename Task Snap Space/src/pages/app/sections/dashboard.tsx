import { useState } from 'react';

import TaskCategory from '@/pages/app/task/category';

import type { Task } from '@/types/task';

export default function Dashboard() {
    const defaultData: Task[] = [
        { id: 1, category: 'todo', content: 'Book a trip to Paris' },
        { id: 2, category: 'todo', content: 'Buy a new laptop' },
        { id: 3, category: 'todo', content: 'Find a new job' },
        { id: 4, category: 'todo', content: 'Pay electricity bill' },
        { id: 5, category: 'todo', content: 'Read more books' },
        { id: 6, category: 'inProgress', content: 'Plan a party' },
        { id: 7, category: 'inProgress', content: 'Learn a new language' },
        { id: 8, category: 'inProgress', content: 'Create a new website' },
        { id: 9, category: 'inProgress', content: 'Write a novel' },
        { id: 10, category: 'inProgress', content: 'Train a new dog' },
        { id: 11, category: 'completed', content: 'Finish the project' },
        { id: 12, category: 'completed', content: 'Get a new phone' },
        { id: 13, category: 'completed', content: 'Find a new flat' },
        { id: 14, category: 'completed', content: 'Buy a new car' },
        { id: 15, category: 'completed', content: 'Get a new job' },
    ];

    const [data, setData] = useState<Task[]>(defaultData);

    const todoData = data.filter((task) => task.category === 'todo');
    const inProgressData = data.filter((task) => task.category === 'inProgress');
    const completedData = data.filter((task) => task.category === 'completed');

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <TaskCategory taskList={todoData} type='todo' />
                <TaskCategory taskList={inProgressData} type='inProgress' />
                <TaskCategory taskList={completedData} type='completed' />
            </div>
        </section>
    );
}
