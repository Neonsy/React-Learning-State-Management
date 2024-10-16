import type { Category } from "./category";

export type Task = {
    id: number;
    category: Category;
    content: string;
};
