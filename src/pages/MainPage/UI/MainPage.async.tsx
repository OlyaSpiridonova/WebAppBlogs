import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
    const mainPage = await import('./MainPage');
    return mainPage;
});
