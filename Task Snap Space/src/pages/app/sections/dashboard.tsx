import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { useInitialData } from '@/hooks/db';
import TaskCategory from '@/pages/app/task/category';

export default function Dashboard() {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const [categories, setCategories] = useInitialData();

    console.log(categories);

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <DndContext collisionDetection={closestCorners} sensors={sensors}>
                    {categories.map((category) => (
                        <TaskCategory key={category.id} id={category.id} type={category.type} taskList={category.taskList} />
                    ))}
                </DndContext>
            </div>
        </section>
    );
}
