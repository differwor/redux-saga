import React from "react";

function CarouselItem(props) {
   const { srcImg, title1, title2, description } = props;
   return (
         <div className="container-fluid">
            <div className="carousel-caption relative-custom1">
               <div className="row d_flex">
                  <div className="col-md-6">
                     <div className="con_img">
                        <figure>
                           <img className="img_responsive" src={srcImg} alt="#" />
                        </figure>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="bluid">
                        <h1>
                           {title1}
                           <br /> {title2}
                        </h1>
                        <p>{description}</p>
                        <a className="read_more" href="/">
                           Read More{" "}
                        </a>
                        <a className="read_more" href="/">
                           Get A Quote{" "}
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   );
}

export default CarouselItem;
