import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '../routers/PublicRouter';
import PrivateRouter from '../routers/PrivateRouter';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import Home from '../pages/dashboard/Home';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRouter logged={false} />}>
                    <Route path='/' element={<Home /> } />
                </Route>

                <Route path='/' element={<PublicRouter logged={false} />}>
                    <Route path='/signin' element={<Signin /> } />
                    <Route path='/signup' element={<Signup /> } />
                </Route>
                
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>   
    );
}

export default AppRouter;