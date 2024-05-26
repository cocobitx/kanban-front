import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import { signup } from '../../store/actions/authActions';

function Signup() {
    //Notificacions de pantalla
    const [messageApi, contextHolder] = message.useMessage();
    // Estado del formulario
    const formStateInitial = {'value' : '', 'error': ''};
    const [name, setName] = useState(formStateInitial);
    const [email, setEmail] = useState(formStateInitial);
    const [password, setPassword] = useState(formStateInitial);
    const [password_confirmation, setPasswordConfirmation] = useState(formStateInitial);
    // Redux estado
    const { loading, errors, data } = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    //Manejo de errores y validaciones
    useEffect(()=> {
        if(errors != null){
            if(errors[0].status != '500'){
                errors.forEach((value) => {
                    if(value.field == 'name'){
                        setName({...name, 'error' : value.detail})
                    }
                    if(value.field == 'email'){
                        setEmail({...email, 'error' : value.detail})
                    }
                    if(value.field == 'password'){
                        setEmail({...email, 'error' : value.detail})
                    }
                });
            }
        }
    },[errors]);

    //Reiniciar formulario si esta creado el user
    useEffect(()=>{
        if(data?.status == '201'){
            setName(formStateInitial);
            setEmail(formStateInitial);
            setPassword(formStateInitial);
            setPasswordConfirmation(formStateInitial);
        }
    },[data]);

    const handleRegister = (ev) => {
        ev.preventDefault();
        dispatch(signup({   
            'name':name.value,
            'email':email.value,
            'password':password.value,
            'password_confirmation':password_confirmation.value 
        }, messageApi));
    }
 
    return (
        <div className='flex items-center justify-center h-[90vh] w-full'>
            {contextHolder}
            <form onSubmit={handleRegister}>
                <img className='w-12 mx-auto mb-6' src={logo} alt="logo identidad" />
                <h1 className='text-lg text-center mb-4'>Registrar cuenta</h1>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='name'>Nombres</label>
                    <Input onChange={({target})=> setName({...name, 'value': target.value})} value={name.value} id='name' name='name' type='text' autoComplete='false' status={name.error!='' ? 'error' : ''} />
                    <p className='left-0 text-sm text-red-500'>{ name.error }</p>
                </div>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='email'>Correo electronico</label>
                    <Input onChange={({target})=> setEmail({...email, 'value': target.value})} value={email.value} id='email' name='email' type='email' placeholder='correo@domain.com' status={email.error!='' ? 'error' : ''} />
                    <p className='left-0 text-sm text-red-500'>{ email.error }</p>
                </div>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='password'>Contraseña</label>
                    <Input onChange={({target})=> setPassword({...password, 'value': target.value})} value={password.value} id='password' name='password' type='password' placeholder='*******' status={password.error!='' ? 'error' : ''} />
                    <p className='left-0 text-sm text-red-500'>{ password.error }</p>
                </div>
                <div className='mb-5'>
                    <label className='text-gray-600' htmlFor='password_confirmation'>Confirmar contraseña</label>
                    <Input onChange={({target})=> setPasswordConfirmation({...password_confirmation, 'value': target.value})} value={password_confirmation.value} id='password_confirmation' name='password_confirmation' type='password' placeholder='*******' status={password_confirmation.error!='' ? 'error' : ''} />
                    <p className='left-0 text-sm text-red-500'>{ password_confirmation.error }</p>
                </div>
                <p className='mb-5 text-gray-600'>Ya tienes cuenta ? <Link to='/signin' className='text-blue-600'>iniciar sesión</Link> </p>
                <Button className='mx-auto block' type='primary' loading={loading} htmlType='submit'>Registrar</Button>
            </form>
        </div>
    );
}

export default React.memo(Signup);