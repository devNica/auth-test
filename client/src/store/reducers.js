/**
 * @param {Object} state 
 * @param {Object} action 
 */
export default function Reducer(state, action){
    const { type, payload } = action

    switch(type){
        case 'SET_AUTH':
            localStorage.setItem('token', payload.accessToken)
            return { ...state, isAuth: true, accessToken: payload.accessToken, isAlert: false }
        
        case 'FAIL_LOGIN':
            return { ...state, message: payload.message, isAlert: true, alertType: "danger" }
        
        case 'SUCCESS_REGISTER':
            return { ...state, message: payload.message, isAlert: true, alertType: "success" }

        case 'CLEAR_ALERT':
            return {...state, message: "", isAlert: false, alertType: "" }
            
        case 'LOAD_USER':
            const token = state.accessToken
            if(token){
                console.log('habia un token', token)
                return {...state, isAuth: true}
            } else {
                return {...state, isAuth: false, accessToken: ""}
            }

        case 'USER_LOGOUT':
            console.log('entro aca')
            localStorage.removeItem('token')
            return { ...state, isAuth: false }
        
        default:
            return state
            
    }
}