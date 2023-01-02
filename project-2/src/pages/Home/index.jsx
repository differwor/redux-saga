import React from "react";
import top_img from "../../assets/images/top_img.png";
import About from "../../components/OurInfo";
import BannerItem from "../../components/BannerItem";
import Contact from "../../components/ContactInfo";
import Graf from "../../components/Graf";
import Service from "../../components/ServiceInfo";
import Testimonial from "../../components/TestimonialInfo";
import Work from "../../components/WorkInfo";
import "./style.css";

function Home(props) {
   const bannerData = [
      { 
         id: 1,
         srcImg: top_img,
         title1: "Progress",
         title2: "Your Bitcoin Money Success 1",
         description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered 1",
      },
      {
         id: 2,
         srcImg: top_img,
         title1: "Progress",
         title2: "Your Bitcoin Money Success 2",
         description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered 2",
      },
      {
         id: 3,
         srcImg: top_img,
         title1: "Progress",
         title2: "Your Bitcoin Money Success 3",
         description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered 3",
      },
   ];

   const bannerList = bannerData.map((item, index) => {
      const className = index === 0 ? "carousel-item active" : "carousel-item";
      return (
         <div key={item.id} className={className}>
            <BannerItem
               srcImg={item.srcImg}
               title1={item.title1}
               title2={item.title2}
               description={item.description}
            />
         </div>
      );
   });

   return (
      <>
         {/* start slider section */}
         <div id="top_section" className="banner_main">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">{bannerList}</div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                           <i className="fa fa-angle-left" aria-hidden="true"></i>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                           <i className="fa fa-angle-right" aria-hidden="true"></i>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* end slider section */}

         {/* wallet */}
         <Service />
         {/* end wallet */}

         {/* about */}
         <About />
         {/* end about */}

         {/* graf */}
         <Graf />
         {/* end graf */}

         {/* testimonial */}
         <Testimonial />
         {/* end testimonial */}

         {/* works */}
         <Work />
         {/* end works */}

         {/* contact */}
         <Contact />
         {/* end contact */}
      </>
   );
}

export default Home;
