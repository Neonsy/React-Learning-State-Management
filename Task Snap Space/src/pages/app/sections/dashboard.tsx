import {
    closestCorners,
    DndContext,
    DragEndEvent,
    DragMoveEvent,
    DragOverEvent,
    DragStartEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { useInitialData } from '@/hooks/db';

import TaskCategory from '@/pages/app/task/category';

import type { Task } from '@/types/task';

export default function Dashboard() {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const [categories, setCategories] = useInitialData();

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <DndContext
                    collisionDetection={closestCorners}
                    sensors={sensors}
                    // onDragStart={handleDragStart}
                    // onDragMove={handleDragMove}
                    // onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}>
                    {categories.map((category) => (
                        <TaskCategory key={category.id} id={category.id} type={category.type} taskList={category.taskList} />
                    ))}
                </DndContext>
            </div>
        </section>
    );

    // ========================================================================================================================================================================

    function handleDragStart(e: DragStartEvent) {
        console.log('Drag Started', e);
    }

    function handleDragMove(e: DragMoveEvent) {
        console.log('Drag Move', e);
    }

    function handleDragOver(e: DragOverEvent) {
        const { active, over } = e;
    }

    function handleDragEnd(e: DragEndEvent) {
        const { active, over } = e;

        const eventState = {
            droppedOnSameItem: false,
            activeIsAnItem: false,
            overIsAnItem: false,
            overIsAContainer: false,
            dropTargetIsInSameContainer: false,
        };

        const activeData = {
            activeContainer: '',
            activeItemIndex: 0,
            activeItemArray: [] as Task[],
            activeItem: {} as Task,
        };

        const overData = {
            overContainer: '',
            overItemIndex: 0,
            overItemArray: [] as Task[],
            overItem: {} as Task,
        };

        eventState.droppedOnSameItem = active.id === over?.id;
        eventState.activeIsAnItem = active.data.current?.type === 'task';
        eventState.overIsAnItem = over?.data.current?.type === 'task';
        eventState.overIsAContainer = !eventState.overIsAnItem && !!over?.data.current?.type;

        eventState.dropTargetIsInSameContainer = eventState.overIsAnItem
            ? String(active.data.current?.sortable.containerId).includes(String(over?.data.current?.sortable.containerId))
            : String(active.data.current?.sortable.containerId).includes(String(over?.id));

        activeData.activeContainer = active.data.current?.sortable.containerId;

        activeData.activeItemIndex = active.data.current?.sortable.index;
        activeData.activeItemArray = categories.find((c) => c.id === activeData.activeContainer)?.taskList as Task[];
        activeData.activeItem = activeData.activeItemArray?.[activeData.activeItemIndex!];

        overData.overContainer = !eventState.overIsAnItem ? over?.id : over?.data.current?.sortable.containerId;

        if (eventState.overIsAnItem) {
            overData.overItemIndex = over?.data.current?.sortable.index;
            overData.overItemArray = categories.find((c) => c.id === overData.overContainer)?.taskList as Task[];
            overData.overItem = overData.overItemArray?.[overData.overItemIndex!];
        }
    }
}
