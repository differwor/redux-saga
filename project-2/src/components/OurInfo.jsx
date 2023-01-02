import React from "react";
import about2 from "../assets/images/about2.png";

function OurInfo(props) {
   return (
      <div id="about" className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="about_border">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="titlepage text_align_left">
                              <h2>About Us</h2>
                           </div>
                           <div className="about_text">
                              <p>
                                 It is a long established fact that a reader will be distracted bIt is a long
                                 established fact that a reader will be distracted by y It is a long established fact
                                 that a reader will be distracted by It is a long established fact that a reader will be
                                 distracted by{" "}
                              </p>
                              <a className="read_more" href="about.html">
                                 Read More
                              </a>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="about_img">
                              <figure>
                                 <img className="img_responsive" src={about2} alt="#" />
                              </figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OurInfo;
