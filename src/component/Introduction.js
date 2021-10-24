import React, { Component } from "react";
import { Image } from "react-bootstrap";
import illustration from "../Images/Team work_Monochromatic.svg";
// import sprinkiles from "../Images/Sprinkle.svg"
export class Introduction extends Component {
  render() {
    return (
      <div>
        
        <div className="theGrid " style={{margin:"auto 1%"}} id="intro">
          <div className="gridItem">
            <article className="article-intro">
              <div >
                <h2 style={{ fontWeight: "lighter" }} className="hello">Hello my name is</h2>
                <h2 className="my-name">haya lawansah</h2>
              </div>
              <div >
                <p
                  className="title"
                  
                >
                  A software developer
                </p>
                <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
                  welcome to my profile
                </p>
              </div>
            </article>
          </div>
          <div className="gridItem">
            <Image src={illustration} style={{ width: "100%"}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
