import React, { Component } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import linked from "../Images/LI-In-Bug.png";
export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" style={{position:"sticky",zIndex:1,top:0,width:"100%"}}>
          <Container>

            <div>
              <Navbar.Brand href="#intro">Hayaa</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="nav-linkes">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#work">Work</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </div>
                <div className="socialLinks">
                  <Nav.Link
                    href="https://www.linkedin.com/in/hayaa-lawansah-63a215175/"
                    target="blanck"
                  >
                    <Image src={linked} className="linkedIn-img" />
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.linkedin.com/in/hayaa-lawansah-63a215175/"
                    target="blanck"
                  >
                    <Image
                      className="linkedIn-img"
                      src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
                    />
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
