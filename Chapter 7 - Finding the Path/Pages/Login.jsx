import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import login from '../Images/login.png'

const loginSchema= yup.object({
    email:yup.string().email("invalid email format").required("email is required field"),
    password:yup.string().min(6,"password must be 6 charater").required("password is requires filed")
})




const initialValues={
    email:"",
    password:""}




function Login() {
const navigate=useNavigate();


    function handleNavigate(values) {
        // Alert the input values of the form that we filled
        // alert(values);
        // setTimeout for navigate from login page to home page
        setTimeout(() => {
          navigate("/");
        }, 0);
      }
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={loginSchema}
    onSubmit={(values)=>{
        handleNavigate(JSON.stringify(values))

       
    }}
>
    {({values,errors,touched,submitForm,handleChange,handleBlur})=>(
     
     <div className='login-container'>
        <div className='form-container'>
        <div class="avatar">
       <img class="avatar__image" src={login} />
       </div>
        <h1>Log In</h1>
        <form  method="POST" onSubmit={submitForm}>
       <label htmlFor='email'>Email </label>
     <input type="email" name="email" id="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
    {errors.email && touched.email? <p className='error-form'>{errors.email}</p>:null} 
    <label htmlFor='password'>Password</label>
     <input type="password" name="password" id="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
    {errors.password && touched.password ? <p className='error-form'>{errors.password}</p>:null}

    <button type='submit'>Login</button>

        </form>
        </div>
       



     </div>

    )}

    </Formik>
  )
}

export default Login