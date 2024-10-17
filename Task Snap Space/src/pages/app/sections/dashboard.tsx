import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

import TaskCategory from '@/pages/app/task/category';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export default function Dashboard() {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <DndContext collisionDetection={closestCorners} sensors={sensors}>
                    <TaskCategory taskList={todoData} type='todo' />
                    <TaskCategory taskList={inProgressData} type='inProgress' />
                    <TaskCategory taskList={completedData} type='completed' />
                </DndContext>
            </div>
        </section>
    );
}
