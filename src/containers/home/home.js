import React, { Component } from "react";
import Layout from "../../hoc/layout/layout";
import "./home.css";
import TitleLogo from "../../assests/images/description.png";

class Home extends Component {
  state = {};

  render() {

    const LeftSideTitle=(
            <React.Fragment>
              
            <div   className="TitleLeftSideHeading">
            <p style={{ color: "#ff914d", marginBottom:"0px" ,alignItems:"left" ,fontSize:"15px" ,fontWeight:"500" }}>Connecting the Disconnected</p>
              <span style={{ color: "#ff914d" }}>Vyorius</span> brings unmanned
              robots <span style={{ color: "#ff914d" }}>together</span>, wherever
              they are
            </div>
            <div style={{marginBottom:"15px"}}>
              With all of the operations, commanding and maintenance tools in
              one place, unmanned vehicles will stay connected and productive no
              matter where you’re operating.
            </div>
            <div syle={{textAlign:"left"}} >
            <button
              style={{ marginRight: "10px" ,backgroundColor:"#ff914d" }}
              className="btn  btn-lg download-button TitleButton TitleButtonLeft"
            >
              Try Vyorius
            </button>
            <button
              style={{ marginLeft: "10px" , borderColor:"#ff914d" , backgroundColor:"white"} }
              className="btn  btn-lg download-button TitleButton TitleButtonRight"
            >
              Learn More
            </button>
            </div>
            <p style={{marginBottom:"0"}}>
              Need to order ? <a href="#">get Started</a>
            </p>
            </React.Fragment>
    ) ;
    const rightSideTitle =(
        <img
              src={TitleLogo}
              style={{ width: "85%" }}
              alt="title left logo"
            />
    )
    
    return (
      <Layout>
         <div className="row">
          <div className="col-md-6 col-sm-12 title-box TitleLeftSide">
            {LeftSideTitle}
          </div>
          <div className="col-md-6 col-sm-12  TitleRightSide">
            {rightSideTitle}
          </div>
        </div>

    
      </Layout>
    );
  }
}

export default Home;
