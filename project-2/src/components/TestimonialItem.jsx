import React from "react";
import icon from "../assets/images/icon.png"

function TestimonialItem(props) {
	const { srcImg , name , genres , comment } = props;
   	return (
      <div className="container">
         <div className="carousel-caption posi_in-custom1">
            <div className="row">
               <div className="col-md-3">
                  <div className="testomoniam_text text_align_center">
                     <i>
                        <img src={srcImg} alt="#" />
                     </i>
                     <h3>{name}</h3>
                     <span>{genres}</span>
                     <img src={icon} alt="#" />
                  </div>
               </div>
               <div className="col-md-9">
                  <div className="testomoniam_text text_align_left">
                     <p>
                        {comment}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TestimonialItem;
