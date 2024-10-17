import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Container from '@/components/container';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function App() {
    return (
        <div id='app-grid' className='grid grid-rows-[auto_1fr_auto]'>
            <Header />

            <Container>
                <Outlet />
            </Container>

            <Footer />

            <TanStackRouterDevtools />
        </div>
    );
}
