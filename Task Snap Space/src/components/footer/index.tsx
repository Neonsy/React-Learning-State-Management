import { getYear } from '@/libs/utils/date';

import { FaRegCopyright } from 'react-icons/fa';

import Container from '@/components/container';

export default function Footer() {
    return (
        <footer className='bg-slate-50/15 text-white py-3 px-1.5'>
            <Container>
                <p className='flex items-center justify-center gap-x-1'>
                    <FaRegCopyright /> {getYear()} TaskSnapSpace by{' '}
                    <a href='https://github.com/Neonsy' rel='noreferrer noopener' target='_blank' className='hover:underline text-[#14fff3]'>
                        Neonsy
                    </a>
                </p>
            </Container>
        </footer>
    );
}
