import React, { Component } from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import hayaa from "../Images/hayaa.jpg";

export class AboutMe extends Component {
  render() {
    return (
      <>
        <Container className="about-div" id="about">
          <div  className="about-flex">
            <div>
              <Image className="my-img" src={hayaa} />
            </div>
            <div>
              <article>
                <h1>About Me</h1>
                <p>
                  I am haya lawansah 24 years old web developer ,I developed
                  several website during my study in LTUC-Abdul Aziz Al Ghurair
                  School of Advanced Computing collage when taking software
                  development course,I am really interested to learn more and
                  deploy my knowladge in a real world applications
                </p>
                <div className="skills" id="skills">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                    className="skills-image"
                  />

                  <Image
                    src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                    className="skills-image"
                  />

                  <Image
                    src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                    className="skills-image"
                  />

                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                    className="skills-image"
                  />

                  <Image
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                    className="skills-image"
                  />

                  <Image
                    src="data:image/png;base64,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"
                    className="skills-image"
                  />
                </div>
                <div className="Buttons-div">
                  <Button className="button" variant="primary" href="https://www.linkedin.com/in/hayaa-lawansah-63a215175/" target="blanck">
                    Connect
                  </Button>
                  <Button className="button" variant="primary" href="https://drive.google.com/file/d/1zo5sg7ohSCCG-kDe53tIJI5wARmunx5H/view?usp=sharing" target="blanck">
                    Resume
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default AboutMe;
