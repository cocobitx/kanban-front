import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter({logged}) {
    return logged ? <Outlet /> : <Navigate to='/signin' />
}

export default PrivateRouter;