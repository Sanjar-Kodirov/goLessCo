import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteConfig } from 'shared/config/routeConfig/routerConfig';

export function AppRouter() {
    console.log();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                {Object.values(RouteConfig).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<div className="page-wrapper">{route.element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
