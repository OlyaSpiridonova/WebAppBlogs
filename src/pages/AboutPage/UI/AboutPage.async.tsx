import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
    const aboutPage = await import('./AboutPage');
    return aboutPage;
});
