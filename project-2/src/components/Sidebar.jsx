import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

function Sidebar(props) {
   const [selected, setSelected] = useState("");
   const navigate = useNavigate();
   
   const closeNav = (e) => {
      e.preventDefault();
      props.closeNav();
   };

   const handleSelected = (e, item) => {
      e.preventDefault();
      setSelected(item);
      navigate(`/${item}`);
      props.closeNav();
   };

   const listPage = ["Home", "Services", "About", "Testimonial", "Works", "Contact"];

   const listRender = listPage.map((item, i) => (
      <Link key={i} onClick={(e) => handleSelected(e, item)} className={item === ( selected || props.selected ) ? "active" : ""}>
         {item}
      </Link>
   ));

   return (
      <div id="mySidepanel" className={!props.isShow ? "sidepanel" : "sidepanel sidepanel-show"}>
         <a href="/" className="closebtn" onClick={closeNav}>
            ×
         </a>
         {listRender}
      </div>
   );
}

export default React.memo(Sidebar);
