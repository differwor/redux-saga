import React from "react";

function GrafContent(props) {
   const { lastPrice , dailyChange , lowPrice , highPrice , todayOpen , volume , srcChart1 , srcChart2 , totalPrice } = props;
   return (
      <>
         <div className="row">
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     USD {lastPrice} <br /> Last Price{" "}
                  </h4>
               </div>
            </div>
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     USD {dailyChange} <br /> Daily Change{" "}
                  </h4>
               </div>
            </div>
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     USD {lowPrice} <br /> 24 Hour Low{" "}
                  </h4>
               </div>
            </div>
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     USD {highPrice} <br /> 24 Hour High{" "}
                  </h4>
               </div>
            </div>
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     USD {todayOpen} <br /> Today Open{" "}
                  </h4>
               </div>
            </div>
            <div className="col-md-2 col-sm-4">
               <div className="usd text_align_center">
                  <h4>
                     BTC {volume} <br /> 24 hour volume{" "}
                  </h4>
               </div>
            </div>
         </div>
         <div className="graf_bootom">
            <div className="row">
               <div className="col-md-6">
                  <div className="growth text_align_center">
                     <figure>
                        <h3 className="h3tota">Total Growth</h3>
                        <img className="img_responsive" src={srcChart1} alt="#" />
                     </figure>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="growth text_align_center">
                     <h3>
                        LiveTrades <span className="pa_ri text-warning">USD {totalPrice}</span>
                     </h3>
                     <figure>
                        <img className="img_responsive" src={srcChart2} alt="#" />
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default GrafContent;
