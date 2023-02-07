import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData; //destructuring
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(e.target.id)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,   //e.target.id will give id of target-email/password
    }))                                //target id must be same as object property
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back! 
          </p>
        </header>
        <form>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={onChange}
            className="emailInput"
          />
          <div className="passwordInputDiv">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='passwordInput'  
              id="password"
              value={password}
              placeholder = 'Enter your password'
              onChange = {onChange}
            />
            <img 
              src={visibilityIcon} 
              alt="show password" 
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}  
            />
          </div>
          <Link 
            to='/forgot-password'
            className="forgotPasswordLink"  
          >
              Forgot Password?
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon 
                width="34px"
                height="34px"
                fill="#fff"
              />
            </button>
          </div>
        </form>
        {/* Google OAuth */}

        <Link to = "/sign-up" className="registerLink">Sign Up Instead</Link>
      </div>
    </>
  )
}
  
export default SignIn