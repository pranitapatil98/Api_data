import React,{ useState} from "react";

 import { useNavigate, } from 'react-router-dom';
 import './login.css';

const Login=()=>{
    

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[userError,setUserError]=useState({});
    const[passError,setPassError]=useState({});


   const navigate = useNavigate();

     function login(){
        let item={email,password};
        console.log(item);
        
         navigate("/data");
    }
   function loinHandler(e){
    e.preventDefault();
   const isValid=formValidation();
   if(isValid){
       navigate(login());
        
       navigate("/data");
       setUserError("");
       setPassError("");
   }
   }

  function formValidation(){
       const userError={};
       const passError={};
      
       let isValid=true;
     
    
     
       setUserError("");
 
       if((email.length<6)){
           userError.nameshort="Please enter correct username ";
           isValid=false;
          
       }
       if((password.length<5 && password.length>11)){
           passError.password="enter correct password ";
           isValid=false;
           
       }
       setUserError(userError);
       setPassError(passError);
       return isValid;
       
   }

    return(
        <>
<h1 className="w-50 offset-3 ">welcome to Login</h1>
<div className="  mb-3">
<form onSubmit={loinHandler} className="login-form">
<div className="w-50 offset-3 " >

<input type="email"  value={(email)}  onChange={(e)=>{setEmail(e.target.value)}} className="form-control offset-2 my-2 mx-2" placeholder="UserName"/> <br/>
{Object.keys(userError).map((key)=>{
    return <div style={{color:"red"}}>{userError[key]}</div>
})}
<input type="password"  value={(password)}  onChange={(e)=>{setPassword(e.target.value)}} className="form-control  offset-2 my-2 " placeholder="Password"  /> <br/>
{Object.keys(passError).map((key)=>{
    return <div style={{color:"red"}}>{passError[key]}</div>
})}
<button type="submit"  className="btn btn-primary btn-sm offset-4">Login</button><span> </span><span>  </span>
 

</div>
</form>
</div>

</>

    );
};

export default Login;


