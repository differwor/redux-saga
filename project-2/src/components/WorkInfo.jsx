import React from "react";
import work from "../assets/images/work.png";

function WorkInfo(props) {
   return (
      <div className="works">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>How It Works</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="works_vedio">
                     <figure>
                        <img className="img_responsive" src={work} alt="#" />
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default WorkInfo;
