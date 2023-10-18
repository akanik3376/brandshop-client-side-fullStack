import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providor/Providor";

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)
    console.log(user)

    const HandelLogout = () => {
        logOutUser()
    }


    const navLinks = <>
        <li className="">
            <NavLink to='/'>Home</NavLink>
        </li>

        <li className="">
            <NavLink to='/addProduct'>Add Product</NavLink>
        </li>
        <li className="">
            <NavLink to='/myCart'>My Cart</NavLink>
        </li>
        {/* <li className="">
            <NavLink to='/login'>Login</NavLink>
        </li> */}
        <li className="">
            <NavLink to='/aboutUs'>AboutUs</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-slate-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <img src="https://i.ibb.co/rm2CTcC/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1 text-white">
                    {
                        navLinks
                    }
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <div>
                                {
                                    user ? <img className="w-14 rounded-full" src={user.photoURL} alt="" />
                                        : <img src="https://i.ibb.co/kyTTWYh/photo-1534528741775-53994a69daeb.jpg" alt="" />
                                }
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-slate-300">


                        {
                            user ? <>
                                <p className="text-blue-700 font-bold mb-3 ">{user.email}</p>

                                < button className="btn btn-primary" onClick={HandelLogout}>Logout</button>
                            </> || <p>{""}</p>


                                :
                                <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                        }

                    </ul>
                </div>
            </div>



        </div >
    );
};

export default Navbar;