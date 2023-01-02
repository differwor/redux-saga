import React from "react";
import clint from "../assets/images/clint.jpg";
import TestimonialItem from "./TestimonialItem";

function TestimonialInfo(props) {
   const testimonialData = [
      {
         id: 1,
         srcImg: clint,
         name: "MorGan Den1",
         genres: "Bitcoin1",
         comment:
            "more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of",
      },
      {
         id: 2,
         srcImg: clint,
         name: "MorGan Den2",
         genres: "Bitcoin2",
         comment:
            "more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of",
      },
      {
         id: 3,
         srcImg: clint,
         name: "MorGan Den3",
         genres: "Bitcoin3",
         comment:
            "more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of",
      },
   ];

   const indicatorList = testimonialData.map((item, i) => {
      const className = i === 0 ? "active" : "";
      return <li key={i} data-target="#testimo" data-slide-to={i} className={className}></li>;
   });

   const testimonialList = testimonialData.map((item, i) => {
      const className = i === 0 ? "carousel-item active" : "carousel-item";
      return (
         <div key={item.id} className={className}>
            <TestimonialItem srcImg={item.srcImg} name={item.name} genres={item.genres} comment={item.comment} />
         </div>
      );
   });

   return (
      <div className="testimonial">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="border_testi">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="titlepage text_align_center">
                              <h2>Testimonial</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row d_flex">
                        <div className="col-md-10 offset-md-1">
                           <div id="testimo" className="carousel slide our_testimonial" data-ride="carousel">
                              <ol className="carousel-indicators">{indicatorList}</ol>
                              <div className="carousel-inner">
                                 {testimonialList}
                              </div>
                              <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                                 <i className="fa fa-angle-left" aria-hidden="true"></i>
                                 <span className="sr-only">Previous</span>
                              </a>
                              <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
                                 <i className="fa fa-angle-right" aria-hidden="true"></i>
                                 <span className="sr-only">Next</span>
                              </a>
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

export default TestimonialInfo;
