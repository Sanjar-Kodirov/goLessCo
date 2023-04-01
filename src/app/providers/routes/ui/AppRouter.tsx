import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export function AppRouter() {
    return (
        <Routes>
            {Object.values(RouteConfig).map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
}
