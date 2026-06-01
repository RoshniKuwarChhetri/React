import React, { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css";
import { FaLock } from 'react-icons/fa';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();

    const user_id = localStorage.getItem("user_id");
    // console.log(user_id)

    function handleLogout() {
        localStorage.removeItem("user_id");
        navigate("/");
        alert("user log out successfully")
    }
    async function deleteProfile(){
        let res= confirm("do you want to delete profile")
        if(res){
            let res =await axios.delete(`http://localhost:5050/users/${user_id}`)
            if(res){
                alert("Profile Deleted")
                localStorage.removeItem("userid")
                 navigate("/");
            }else{
                alert("something went wrong....")
            }
        }
    }
  return (
    <nav className='navbar'>
      <ul className='nav-list'>

        <li>
            <NavLink to="/" >Home</NavLink>
        </li>

        {user_id && (
        <Fragment>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/allProduct">All Product</NavLink></li>
            <li><NavLink to="/editProfile">Edit Profile</NavLink></li>

            {/* <li className="user-name">Hi, {user_id.username}</li> */}

        <li>
            <button onClick={handleLogout} className="logout-btn">

                Logout
            </button>
        </li>
        <li>
            <button onClick={handleDelete} className="logout-btn">

                Delete
            </button>
        </li>
        </Fragment>
        )}

        {!user_id && ( 
        <Fragment>
            <li className="right-start"><NavLink to="/login" className="login-btn"><FaLock className="icon" /> Login</NavLink></li>
            <li className="right-start"><NavLink to="/signup" className="signup-btn">SignUp</NavLink></li>
        </Fragment>
        )} 
      </ul>
    </nav>
  )

}


export default Navbar