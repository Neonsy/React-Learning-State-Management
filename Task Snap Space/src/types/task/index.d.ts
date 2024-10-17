import type { Category } from "@/types/task/category";

export type Task = {
    id: number;
    category: Category;
    content: string;
};
