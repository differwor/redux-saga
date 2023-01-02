import React from "react";
import graf1 from "../assets/images/graf1.jpg";
import graf2 from "../assets/images/graf2.jpg";
import GrafContent from "./GrafContent";

function Graf(props) {
   const grafData = [
      {
         lastPrice: "12312,12",
         dailyChange: "345,245",
         lowPrice: "56453,234",
         highPrice: "234123,12",
         todayOpen: "14,4124",
         volume: "1231,123",
         srcChart1: graf1,
         srcChart2: graf2,
         totalPrice: "134,785",
         html: {
            id: "home-tab-md",
            href: "#tab1",
            ariaControls: "home-md",
            contentId: "tab1",
            nameTab: "Bitcoin(BTC)"
         },
      },
      {
         lastPrice: "12312,12",
         dailyChange: "345,245",
         lowPrice: "56453,234",
         highPrice: "234123,12",
         todayOpen: "14,4124",
         volume: "1231,123",
         srcChart1: graf1,
         srcChart2: graf2,
         totalPrice: "134,785",
         html: {
            id: "profile-tab-md",
            href: "#tab2",
            ariaControls: "profile-md",
            contentId: "tab2",
            nameTab: "Bitcoin Cash(BCH)"
         },
      },
      {
         lastPrice: "12312,12",
         dailyChange: "345,245",
         lowPrice: "56453,234",
         highPrice: "234123,12",
         todayOpen: "14,4124",
         volume: "1231,123",
         srcChart1: graf1,
         srcChart2: graf2,
         totalPrice: "134,785",
         html: {
            id: "contact-tab-md",
            href: "#tab3",
            ariaControls: "contact-md",
            contentId: "tab3",
            nameTab: "Bitcoin Lite(LTC)"
         },
      },
      {
         lastPrice: "12312,12",
         dailyChange: "345,245",
         lowPrice: "56453,234",
         highPrice: "234123,12",
         todayOpen: "14,4124",
         volume: "1231,123",
         srcChart1: graf1,
         srcChart2: graf2,
         totalPrice: "134,785",
         html: {
            id: "contact-tab-md",
            href: "#tab4",
            ariaControls: "contact-md",
            contentId: "tab4",
            nameTab: "Bitcoin Ethereum(ETH)"
         },
      },
      {
         lastPrice: "12312,12",
         dailyChange: "345,245",
         lowPrice: "56453,234",
         highPrice: "234123,12",
         todayOpen: "14,4124",
         volume: "1231,123",
         srcChart1: graf1,
         srcChart2: graf2,
         totalPrice: "134,785",
         html: {
            id: "contact-tab-md",
            href: "#tab5",
            ariaControls: "contact-md",
            contentId: "tab5",
            nameTab: "Bitcoin Ripple(XRP)"
         },
      },
   ];

   const grafListButton = grafData.map((item, i) => {
      let className, ariaSelected;

      if (i === 0) {
         className = "nav-link active";
         ariaSelected = "true";
      } else {
         className = "nav-link";
         ariaSelected = "false";
      }

      return (
         <li key={item.html.contentId}>
            <a
               className={className}
               id={item.html.id}
               data-toggle="tab"
               href={item.html.href}
               role="tab"
               aria-controls="home-md"
               aria-selected={ariaSelected}>
               {item.html.nameTab}
            </a>
         </li>
      );
   });

   const grafList = grafData.map((item, i) => {
      const className = i === 0 ? "tab-pane fade show active padi" : "tab-pane fade padi";
      return (
         <div key={item.html.contentId} className={className} id={item.html.contentId} role="tabpanel" aria-labelledby={item.html.id}>
            <GrafContent
               lastPrice={item.lastPrice}
               dailyChange={item.dailyChange}
               lowPrice={item.lowPrice}
               highPrice={item.highPrice}
               todayOpen={item.todayOpen}
               volume={item.volume}
               srcChart1={item.srcChart1}
               srcChart2={item.srcChart2}
               totalPrice={item.totalPrice}
            />
         </div>
      );
   });

   return (
      <div className="graf">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <ul className="nav nav-tabs md-tabs graf_tab" id="myTabMD" role="tablist">
                     {grafListButton}
                  </ul>
                  <div className="tab-content graf_content text-white" id="myTabContentMD">
                     {grafList}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Graf;
