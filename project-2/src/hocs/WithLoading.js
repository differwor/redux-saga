import React from "react";
import loading from "../assets/images/loading.gif";

function WithLoading(WrappedComponent) {
   return class extends React.Component {
      constructor(props) {
         super(props);
         this.state = { isLoading: true };
      };
   
      componentDidMount() {
         this.timeoutId = setTimeout(() => {
            this.setState({ isLoading: false });
         }, 1000);
      }

      componentWillUnmount() {
         clearTimeout(this.timeoutId);
      }
      
      render() {
         if (this.state.isLoading) {
            return (
               <div className="loader_bg">
                  <div className="loader">
                     <img src={loading} alt="" />
                  </div>
               </div>
            );
         }
         return <WrappedComponent />;
      }
   };
}

export default WithLoading;
