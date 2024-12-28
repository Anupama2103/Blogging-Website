import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topIcon  fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-solid fa-envelope"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link" >Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link" >About</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link" >Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link" >Write</Link>
          </li>
          <li className="topListItem">
            {user && "Logout"}
          </li>

        </ul>
      </div>
      <div className="topright">
        {
          user ? (
            <img 
            className="topImg" 
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link" >Login</Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link" >Register</Link>
              </li>
            </ul>
          )
        }
       

      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
