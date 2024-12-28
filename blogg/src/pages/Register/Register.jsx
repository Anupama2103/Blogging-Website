import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
  return (
    <div className="Register">
      <div className="RegisterWrapper">
        <span className="RegisterTitle">Register</span>
        <form className="RegisterForm">
          <label>UserName</label>
          <input type="text" 
          className="RegisterInput" 
          placeholder="Enter your Username..." />
          <label>Email</label>
          <input type="text" 
          className="RegisterInput" 
          placeholder="Enter your email..." />
          <label>Password</label>
          <input type="password" className="RegisterInput" placeholder="Enter your password"/>
          <button className="RegisterButton">Register</button>
        </form>
        <button className="LoginButton">
          <Link to="/login" className="link">Login</Link>
        </button>
      </div>
    </div>
  )
}
