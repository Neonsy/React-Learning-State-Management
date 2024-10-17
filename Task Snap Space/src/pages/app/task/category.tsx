import { SortableContext } from '@dnd-kit/sortable';

import { FiCheckSquare } from 'react-icons/fi';

import TaskCard from '@/pages/app/task/card';

import type { Task } from '@/types/task';
import type { Category } from '@/types/category';
import type { UniqueIdentifier } from '@dnd-kit/core';

type Props = {
    id: UniqueIdentifier;
    type: Category;
    taskList: Task[];
};

export default function TaskCategory({ id, type, taskList }: Props) {
    const { heading, bg } = {
        todo: { heading: 'To Do', bg: 'bg-[#0284C7]' },
        inProgress: { heading: 'In Progress', bg: 'bg-[#2563EB]' },
        completed: { heading: 'Completed', bg: 'bg-[#4F46E5]' },
    }[type];

    return (
        <div>
            <div
                className={`flex justify-between items-center ${bg} text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl`}>
                <h3>{heading}</h3>
                <FiCheckSquare className='text-2xl' />
            </div>

            <div className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                <SortableContext items={taskList.map((i) => i.id)}>
                    {taskList.map((task) => (
                        <TaskCard key={task.id} id={task.id} text={task.content} />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
}
