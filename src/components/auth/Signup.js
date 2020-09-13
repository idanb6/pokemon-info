import React ,{useState} from 'react'
import axios from 'axios';

const Signup = () => {
    const [singIn,setSingIn] = useState({
        email:'',
        password:'',
        mess:''
    })
    const [errors,setErrors] = useState({
      email:'',
      password:'',
  })
    const [lo,setlo] = useState(false);
    const handelChage = (e) => {
        setSingIn({
            ...singIn,
          [e.target.id]: e.target.value,
      })
      }
      const subForm = (e) => {
        e.preventDefault();
        setlo(true)
        axios.post("/signup",{
           email:singIn.email,
           password:singIn.password
        })
        .then((res)=>{   
          console.log('signup');
          setSingIn({
                    email:'',
                    password:'',
              })
              window.location.assign('/');
              setlo(false)            
        })
        .catch((err) => {
            setErrors({
              ...errors,
              email:err.response.data.errors.email,
              password:err.response.data.errors.password               
            })
            setlo(false) 
        })
    }
    return (
            <div className="container ">
              <form className="" onSubmit={subForm}> 
             <h5 className="grey-text text-darken-3">הרשמה לחשבונך</h5>
             <div className="input-field ">
            <label htmlFor="email" >דואל</label>
            <input type="text" onChange={handelChage} name="email" id="email" value={singIn.email} />
            <div className="email error">{errors.email}</div>
            </div>
             <div className="input-field">
             <label htmlFor="password" className="">סיסמה</label>
            <input type="password" onChange={handelChage} name="password" id="password" value={singIn.password} className=""/>
            <div className="password error">{errors.password}</div>
             </div>     
            {<p className="red lighten-2">{singIn.mess}</p>}
                 <div className="input-field">
            {lo ? <p>אנא המתן..</p>: <button className="btn blue lighten-4 z-depth-0">הרשם</button>}
            {/* <span className="left" onClick={()=>props.updatehow("signout")}>חדש? לחץ כאן כדי <span className="yellow lighten-2 z-depth-0" >להרשם</span> לאתר </span> */}
            </div>
          </form>      
        </div>
    )
}

export default Signup
