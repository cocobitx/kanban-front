import React from 'react';
import { Button } from 'antd';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className='flex items-center justify-center h-[90vh] w-full'>
            <form>
                <img className='w-12 mx-auto mb-6' src={logo} alt="logo identidad" />
                <h1 className='text-lg text-center mb-4'>Iniciar sesión</h1>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='email'>Correo electronico</label>
                    <Input id='email' name='email' type='email' placeholder='correo@domain.com' />
                </div>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='password'>Contraseña</label>
                    <Input id='password' name='password' type='password' placeholder='*******' />
                </div>
                <p className='mb-5 text-gray-600'>No tienes cuenta ? <Link to='/signup' className='text-blue-600'>Crear cuenta</Link> </p>
                <Button className='mx-auto block' type='primary'>Iniciar sesión</Button>
            </form>
        </div>
    );
}

export default Signin;