import { env } from '../../env';
import { types } from '../../types/types'; 

function signup(user, messageApi) {
    return (dispatch) => {
        let options = { 
            method: 'POST', 
            body: JSON.stringify(user), 
            headers:{'content-type': 'application/json'}
        }
        
        dispatch({ 'type': types.signup_request,});

        fetch(env.signup, options)
        .then(resp => resp.json())
        .then(data=>{
            if(data.errors){
                //Manejo de errores y validaciones
                if(data.errors[0].status == '500'){
                    messageApi.open({
                        type: 'error',
                        content: data.errors[0].detail,
                    });
                }
                dispatch({
                    'type': types.signup_failure,
                    'payload' : { 'errors': data.errors }
                });
            }else{
                //Manejo de la data sin errores
                messageApi.open({
                    type: 'success',
                    content: `El usuario a sido creado correctamente !`,
                });

                dispatch({
                    'type': types.signup_success,
                    'payload' : { 'status': data.meta.status }
                });
            }
        }).catch(error => {
            dispatch({
                'type': types.signup_failure,
                'payload' : { 'errors': error }
            });
        });
    }
}

export {
    signup
}