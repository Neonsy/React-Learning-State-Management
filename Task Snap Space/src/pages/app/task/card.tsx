import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';

import type { UniqueIdentifier } from '@dnd-kit/core';

type Props = {
    id: UniqueIdentifier;
    text: string;
    buttonPointer?: string;
};

export default function TaskCard({ id, text, buttonPointer }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: id, data: { type: 'task' } });

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`rounded-xl bg-slate-50 shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3 cursor-default ${isDragging ? 'border-4 border-blue-300 border-dashed' : ''}`}>
            <button className='cursor-pointer'>
                <IoCloseOutline className='w-7 h-7' />
            </button>
            <p className='break-all flex-grow'>{text}</p>
            <button className={buttonPointer ? buttonPointer : 'cursor-grab'} {...attributes} {...listeners}>
                <MdOutlineDragIndicator />
            </button>
        </div>
    );
}
