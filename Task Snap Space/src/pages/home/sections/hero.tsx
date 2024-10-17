import { Link } from '@tanstack/react-router';

import Image from '@/components/image';
import heroImage from '@/assets/images/home/hero.webp';

export default function HeroSection() {
    return (
        <section className='relative h-[600px]'>
            <Image src={heroImage} alt='Hero Image' className='brightness-[0.36]' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center'>
                <div className='mb-6 text-center'>
                    <h2 className='text-nowrap text-5xl font-bold mb-3'>Streamline your workflow</h2>
                    <p className='text-nowrap text-2xl font-bold'>A modern task manager with drag and drop functionality</p>
                </div>
                <Link to='/app' className='bg-blue-700 text-xl font-bold px-3 py-1.5 rounded-3xl hover:bg-blue-500 transition-colors active:scale-90'>
                    Get Started
                </Link>
            </div>
        </section>
    );
}
