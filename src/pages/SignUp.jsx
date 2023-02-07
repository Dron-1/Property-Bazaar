import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import { db } from '../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
/*| firebase auth doc-https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0#web-version-9 |*/
/*| firestore doc - https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0 |*/

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const {name, email, password} = formData; //destructuring
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(e.target.id)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,   //e.target.id will give id of target-email/password
    }))                                //target id must be same as object property
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("insoide submit")
    try{
      const auth = getAuth();

      //This line will take care of user password, no need to store pswd in db
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      const user = userCredential.user;

      console.log(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: name
      })

      /* |from here to save data in firestore database| */
      const formDataCopy = {...formData}
      // deleting password from object because coz we dont want to save paswd in db
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      //syntax of doc -> doc(db, collectionName, id of user(primary key))
      //db is a firestore instance
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      //------------------------------------------------//

      navigate('/');
    }
    catch(error)
    {
      console.log("Error while sign up----------------------\n",error);
    }
  } 

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back! 
          </p>
        </header>
        <form onSubmit={onSubmit}>
        <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            value={name}
            onChange={onChange}
            className="nameInput"
          />
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
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon 
                width="34px"
                height="34px"
                fill="#fff"
              />
            </button>
          </div>
        </form>
        {/* Google OAuth */}

        <Link to = "/sign-in" className="registerLink">Already a user? Sign In</Link>
      </div>
    </>
  )
}
  
export default SignUp