import React from "react";
// import wa1 from "../assets/images/wa1.svg";
// import {ReactComponent as wa2} from "../assets/images/wa2.svg";
// import {ReactComponent as wa3} from "../assets/images/wa3.svg";
// import {ReactComponent as wa4} from "../assets/images/wa4.svg";

function ServiceInfo(props) {
   return (
      <div className="wallet">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <div id="wa_hover" className="wallet_box text_align_center">
				  	{/* <wa1 />  */}
                     <h3>ONLINE WALLET</h3>
                     <p>It is a long established fact that a reader will be distracted by </p>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div id="wa_hover" className="wallet_box text_align_center">
                     <i>
                        {/* <img src={wa2} alt="#" /> */}
                     </i>
                     <h3>SEND COINS</h3>
                     <p>It is a long established fact that a reader will be distracted by </p>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div id="wa_hover" className="wallet_box text_align_center">
                     <i>
                        {/* <img src={wa3} alt="#" /> */}
                     </i>
                     <h3>MOBILE APP </h3>
                     <p>It is a long established fact that a reader will be distracted by </p>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div id="wa_hover" className="wallet_box text_align_center">
                     <i>
                        {/* <img src={wa4} alt="#" /> */}
                     </i>
                     <h3>COIN MINING</h3>
                     <p>It is a long established fact that a reader will be distracted by </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ServiceInfo;
