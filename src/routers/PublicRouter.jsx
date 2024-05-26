import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRouter({logged}) {
    return logged ? <Navigate to='/' /> : <Outlet /> ;
}

export default PublicRouter;