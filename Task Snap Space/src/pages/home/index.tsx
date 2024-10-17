import HeroSection from '@/pages/home/sections/hero';
import TechnologiesSection from '@/pages/home/sections/technologies';

export default function HomePage() {
    return (
        <main className='flex flex-col gap-y-12 mb-12'>
            <HeroSection />
            <TechnologiesSection />
        </main>
    );
}
