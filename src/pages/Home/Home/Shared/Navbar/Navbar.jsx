import React, { useContext, useState } from "react";
import logo from "../../../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const { user, logoutUser } = useContext(AuthContext);

   const handleLogout = () => {
      logoutUser();
   };

   // nav link
   const navLink = (
      <>
         {" "}
         <ul className="md:flex md:space-x-4 text-white lilita ">
            <li>
               <ActiveLink
                  to="/"
                  className="text-white hover:text-primary transition delay-200">
                  Home
               </ActiveLink>
            </li>
            <li>
               <ActiveLink
                  to="/alltoy"
                  className="text-white hover:text-primary transition delay-200">
                  All Toys
               </ActiveLink>
            </li>
            {user ? (
               <>
                  <li>
                     <ActiveLink
                        to="/mytoy"
                        className="text-white hover:text-primary transition delay-200">
                        My Toys
                     </ActiveLink>
                  </li>
                  <li>
                     <ActiveLink
                        to="/addtoy"
                        className="text-white hover:text-primary font-thin transition delay-200">
                        Add a Toy
                     </ActiveLink>
                  </li>
               </>
            ) : (
               <li>
                  <ActiveLink
                     to="/blogs"
                     className="text-white hover:text-primary font-thin transition delay-200">
                     Blogs
                  </ActiveLink>
               </li>
            )}
         </ul>
      </>
   );

   return (
      <nav
         className="bg-[#020625] top-0 right-0 left-0 z-[200]  border-b border-primary"
         style={{ backdropFilter: "blur(50px)" }}>
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
               {/* Brand logo */}
               <div>
                  <h2 className="text-4xl lilita tracking-widest">
                     Luxury<span className="text-white">Toy</span>
                  </h2>
               </div>

               {/* Mobile menu toggle button */}
               <div className="block md:hidden">
                  <button
                     type="button"
                     className="text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                     onClick={toggleMobileMenu}>
                     {isMobileMenuOpen ? (
                        <svg
                           className="h-6 w-6 fill-current"
                           viewBox="0 0 24 24">
                           <path
                              d="M6 18L18 6M6 6l12 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     ) : (
                        <svg
                           className="h-6 w-6 fill-current"
                           viewBox="0 0 24 24">
                           <path
                              d="M4 6h16M4 12h16M4 18h16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     )}
                  </button>
               </div>

               {/* Navigation links */}
               <div
                  className={`hidden md:block ${
                     isMobileMenuOpen ? "hidden" : ""
                  }`}>
                  {navLink}
               </div>

               {/* Login button and author image section */}
               <div className="flex items-center space-x-4">
                  {user ? (
                     <button
                        onClick={handleLogout}
                        className="btn btn-primary rounded-2xl">
                        Log out
                     </button>
                  ) : (
                     <Link to="/login">
                        {" "}
                        <button className="btn btn-primary rounded-2xl">
                           Login
                        </button>
                     </Link>
                  )}
                  <div className="tooltip tooltip-open">
                     {user ? (
                        <img
                           src={user?.photoURL}
                           data-tip={user?.displayName}
                           title={user.displayName}
                           alt="Author"
                           className="w-[55px] text-white cursor-pointer h-[55px] border-4 border-pink-600 rounded-full"
                        />
                     ) : (
                        <FaUserCircle className="text-[50px]"></FaUserCircle>
                     )}
                  </div>
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         <div className={`${isMobileMenuOpen ? "md:hidden " : "hidden"}`}>
            <div className="my-2  relative left-[20%]  ">{navLink}</div>
         </div>
      </nav>
   );
};

export default Navbar;
