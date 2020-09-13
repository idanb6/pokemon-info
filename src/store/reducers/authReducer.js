const initState = {
    auth: null,
    isLogin:false,
    error:''
    
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':

            return {
                ...state,
                isLogin:true,
                error:'',
                auth: { token:action.payload.token ,email:action.payload.email,
                    nikename:action.payload.nikename ,id:action.payload.id},
            }
        case 'SINGUP_SUCCESS':
            return {
                ...state,
                error:'',
            }
        
        default:
                return state;
    }
}


export default authReducer

