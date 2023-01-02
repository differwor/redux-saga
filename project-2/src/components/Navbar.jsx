import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaUserAlt, FaSearch } from "react-icons/fa";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import menu_btn from "../assets/images/menu_btn.png";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
   const [sidebarShow, setSidebarShow] = useState(false);
   const selected = useLocation().pathname.substring(1) || "Home";

   const openNav = () => {
      setSidebarShow(true);
   };
   const closeNav = (selected) => {
      setSidebarShow(false);
   };

   return (
      <>
         <Sidebar selected={selected}closeNav={closeNav} isShow={sidebarShow} />
         <header>
            <div className="head-top">
               <div className="container-fluid">
                  <div className="row d_flex">
                     <div className="col-sm-3">
                        <div className="logo">
                           <Link to="/">BitCYPO</Link>
                        </div>
                     </div>
                     <div className="col-sm-5">
                        <ul className="social_icon text_align_right d_none">
                           <li>
                              {" "}
                              <a href="/">
                                 {" "}
                                 <FaFacebookF />{" "}
                              </a>{" "}
                           </li>
                           <li>
                              {" "}
                              <a href="/">
                                 {" "}
                                 <FaTwitter />{" "}
                              </a>{" "}
                           </li>
                           <li>
                              {" "}
                              <a href="/">
                                 <FaLinkedinIn />
                              </a>{" "}
                           </li>
                           <li>
                              {" "}
                              <a href="/">
                                 <FaInstagram />
                              </a>{" "}
                           </li>
                           <li>
                              {" "}
                              <a href="/">
                                 <FaYoutube />
                              </a>{" "}
                           </li>
                        </ul>
                     </div>
                     <div className="col-sm-4">
                        <ul className="social_icon text_align_right">
                           <li className="">
                              <a href="/">
                                 <FaUserAlt />
                              </a>
                           </li>
                           <li className="d_none">
                              <a href="/">
                                 <FaSearch />
                              </a>
                           </li>
                           <li>
                              <button className="openbtn" onClick={openNav}>
                                 <img src={menu_btn} alt="" srcSet="" />
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}

export default Navbar;
