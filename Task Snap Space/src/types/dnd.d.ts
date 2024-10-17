import type { UniqueIdentifier } from '@dnd-kit/core';

import type { Category } from '@/types/category';
import type { Task } from '@/types/task';

export type DNDType = {
    id: UniqueIdentifier;
    type: Category;
    taskList: Task[];
};
