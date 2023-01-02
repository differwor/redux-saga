import React from "react";

function Footer(props) {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <a className="logo_bottom" href="/">
                     BitCYPO
                  </a>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="Informa conta">
                     <h3>Contact Us</h3>
                     <ul>
                        <li>
                           <a href="/">
                              {" "}
                              <i className="fa fa-map-marker" aria-hidden="true "></i> Location{" "}
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <i className="fa fa-phone " aria-hidden="true "></i> Call +01 1234567890{" "}
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              {" "}
                              <i className="fa fa-envelope " aria-hidden="true "></i> demo@gmail.com
                           </a>
                        </li>
                     </ul>
                     <ul>
                        <li>Readable content of</li>
                        <li>a page when looking</li>
                        <li>at its layoutreadable</li>
                        <li>content of a page</li>
                        <li>when looking at its</li>
                        <li>layout</li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="Informa helpful">
                     <h3>Useful Link</h3>
                     <ul>
                        <li>Readable content of</li>
                        <li>a page when looking</li>
                        <li>at its layoutreadable</li>
                        <li>content of a page</li>
                        <li>when looking at its</li>
                        <li>layout</li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="Informa ">
                     <h3>Offices</h3>
                     <ul>
                        <li>Readable content of</li>
                        <li>a page when looking</li>
                        <li>at its layoutreadable</li>
                        <li>content of a page</li>
                        <li>when looking at its</li>
                        <li>layout</li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 ">
                  <div className="Informa ">
                     <h3>Newsletter</h3>
                     <form className="newslatter_form ">
                        <input className="ente " placeholder="Enter your email " type="text " name="Enter your email " />
                        <button className="subs_btn ">Subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div className="copyright text_align_center ">
               <div className="container ">
                  <div className="row ">
                     <div className="col-md-12 ">
                        <p>
                           © 2020 All Rights Reserved. Design by <a href="/"> Free Html Template</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
