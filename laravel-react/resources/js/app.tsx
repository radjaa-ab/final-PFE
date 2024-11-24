import { createInertiaApp } from '@inertiajs/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel'; 
createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    resolve: (name: string) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,  
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }: { el: HTMLElement; App: React.ComponentType<any>; props: any }) {
        const root = createRoot(el);  // This is correct for React 18
        root.render(<App {...props} />);  // Ensure you're using React 18+
    },
    progress: {
        color: '#4B5563',
    },
});
function resolvePageComponent(arg0: string, arg1: any): unknown {
    throw new Error('Function not implemented.');
}

