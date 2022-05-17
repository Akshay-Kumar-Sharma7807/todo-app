import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

export default function Header() {
  const [user] = useAuthState(auth);

  const toggleSidebar = () => {
    console.log("clicked")
    document.querySelector(".sidebar").classList.toggle("open");
    document.querySelector(".overlay").classList.toggle("open");
  }

  return (
    <>
      <nav className="navbar">
        <button onClick={toggleSidebar}><i className="bi bi-three-dots-vertical"></i></button>
        <h2>Todo App</h2>
      </nav>
      <div className="overlay" onClick={toggleSidebar}></div>
      <div className="sidebar">
        <button onClick={toggleSidebar} className="closebtn"><i class="bi bi-x"></i></button>
        <h2>Todo App</h2>
        <ul className="sidebar-list">
          <Link to="/">
            <li><i className="bi bi-house-fill"></i><span>Home</span></li>
          </Link>

          <li><i class="bi bi-info-square-fill"></i><span>About</span></li>
          <div className="div divider"></div>
          <Link to="/settings">
            <li><i className="bi bi-gear-fill"></i><span>Settings</span></li>
          </Link>
          {user ?
            <li onClick={() => { signOut(auth) }}><i class="bi bi-box-arrow-right"></i><span>Logout</span></li> :
            <Link to="/login">
              <li><i className="bi bi-person-circle"></i><span>Login</span></li>
            </Link>
          }
        </ul>
      </div>
    </>
  )
}
