import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='bg-slate-50/15 text-white'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
