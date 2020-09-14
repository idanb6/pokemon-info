import React ,{useState} from 'react'
import {auth} from '../../Firestore';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const Login = ({login,authUser}) => {
    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const handler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const subForm = (e) => {
        e.preventDefault();
        login(user)
    }

    return (
        <>
            {authUser.token ? (<Redirect to='/' />) : (
                <div className="flex justify-center ">
                <div className="text-center flex-center max-w-sm rounded overflow-hidden shadow-lg">
                    <br />
                <form className="w-full max-w-sm" onSubmit={subForm}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Email
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input  onChange={handler} className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name="email" type="email"  />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handler} className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" name="password"  />
                    </div>
                </div>
    
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button onClick={subForm} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Login
                    </button>
                    </div>
                </div>
                </form>
                 </div>
                </div>
            )}
            
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      authUser: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login (user) {
            auth.signInWithEmailAndPassword(user.email, user.password)
               .then((res) => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload:res
                })
              }
               ).catch((err)=> {
                dispatch({
                    type: 'LOGIN_ERROR',
             
                })
               })
           
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
