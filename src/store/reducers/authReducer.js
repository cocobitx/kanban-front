import { types } from '../../types/types'

const initialState = {
    'loading': false,
    'errors' : null,
    'data' : null,
    'authenticated' : false
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.signup_request:
            return {
                'loading': true,
                'errors' : null,
                'data' : null,
                'authenticated' : false
            }

        case types.signup_success:
            return {
                ...state,
                'loading': false,
                'data': {
                    'status' : payload.status
                } 
            }
        case types.signup_failure:
            return {
                ...state,
                'loading': false,
                'errors': payload.errors,
                'data': null 
            }

        case types.signin:
            return {
                'jwt' : payload.jwt,
                'authenticated' : true,
            }
    
        case types.singout:
            return {
                'authenticated' : false
            }
        default:
            return state;
    }
}