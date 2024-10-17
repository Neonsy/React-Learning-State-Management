// Temporary data

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { DNDType } from '@/types/dnd';
import type { Task } from '@/types/task';

export function useInitialData(): [DNDType[], React.Dispatch<React.SetStateAction<DNDType[]>>, Task, React.Dispatch<React.SetStateAction<Task>>] {
    const [categories, setCategories] = useState<DNDType[]>([
        {
            id: 'todoContainer',
            type: 'todo',
            taskList: [
                { id: `item-${uuidv4()}`, content: 'Task 1' },
                { id: `item-${uuidv4()}`, content: 'Task 2' },
                { id: `item-${uuidv4()}`, content: 'Task 3' },
            ],
        },
        {
            id: 'inProgressContainer',
            type: 'inProgress',
            taskList: [
                { id: `item-${uuidv4()}`, content: 'Task 4' },
                { id: `item-${uuidv4()}`, content: 'Task 5' },
                { id: `item-${uuidv4()}`, content: 'Task 6' },
            ],
        },
        {
            id: 'completedContainer',
            type: 'completed',
            taskList: [
                { id: `item-${uuidv4()}`, content: 'Task 7' },
                { id: `item-${uuidv4()}`, content: 'Task 8' },
                { id: `item-${uuidv4()}`, content: 'Task 9' },
            ],
        },
    ]);

    const [activeItem, setActiveItem] = useState<Task>({} as Task);

    return [categories, setCategories, activeItem, setActiveItem];
}
