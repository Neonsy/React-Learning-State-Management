import GridCard from '@/pages/home/gridCard';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { FaWpforms } from 'react-icons/fa';
import { RiDragDropLine } from 'react-icons/ri';
import { GiWifiRouter } from 'react-icons/gi';
import { PiAtomFill } from 'react-icons/pi';
import { RiBearSmileLine } from 'react-icons/ri';

export default function TechnologiesSection() {
    return (
        <section className='flex flex-col justify-center items-center gap-y-5 text-white'>
            <h2 className='font-bold'>Powered by modern technologies</h2>
            <div className='grid grid-rows-2 grid-cols-4 gap-y-3 gap-x-6'>
                <GridCard
                    iconClassName='text-blue-300'
                    Icon={BiLogoTypescript}
                    heading='TypeScript'
                    description='A superset of JavaScript, with static typing'
                />
                <GridCard
                    iconClassName='text-sky-300'
                    Icon={FaReact}
                    heading='React'
                    description='A JavaScript library for building user interfaces'
                />
                <GridCard iconClassName='text-yellow-300' Icon={SiVite} heading='Vite' description='Next generation frontend tooling' />
                <GridCard iconClassName='text-pink-300' Icon={FaWpforms} heading='React Hook Form' description='A library for form validation' />
                <GridCard iconClassName='text-red-300' Icon={RiDragDropLine} heading='DND Kit' description='A drag and drop library' />
                <GridCard
                    iconClassName='text-slate-300'
                    Icon={GiWifiRouter}
                    heading='TanStack Router'
                    description='A feature rich, type-safe routing library'
                />
                <GridCard
                    iconClassName='text-slate-300'
                    Icon={PiAtomFill}
                    heading='Jotai'
                    description='A library for global atom based state management'
                />
                <GridCard
                    iconClassName='text-orange-300'
                    Icon={RiBearSmileLine}
                    heading='Zustand'
                    description='A state management library and Redux alternative'
                />
            </div>
        </section>
    );
}
