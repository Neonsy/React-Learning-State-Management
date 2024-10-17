import { createLazyFileRoute } from '@tanstack/react-router';

import App from '@/pages/app';

export const Route = createLazyFileRoute('/app')({
    component: App,
});
