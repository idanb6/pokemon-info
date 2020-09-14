const initState = {
        email:'',
        token:'',
        uid:''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('LOGIN',action.payload)
            return {
                email : action.payload.user.email,
                token :action.payload.user.refreshToken,
                uid: action.payload.user.uid
            }
        case 'LOGOUT':
            console.log('LOGOUT')
            return {
                state:initState
            }
        case 'USER':
                console.log('USER',action.payload)
                return {
                    email : action.payload.email,
                    token :action.payload.refreshToken,
                    uid: action.payload.uid
            }
        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR')
            return {
                ...state,
                error:action.payload,
            }
        default:
                return state;
    }
}


export default authReducer

