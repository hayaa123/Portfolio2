import React, { Component } from "react";
import NewsBeacon1 from "../Images/NewsBeacon1.png";
import NewsBeacon2 from "../Images/NewsBeacon2.png";
import BussMall from "../Images/buss mall .png";
import CanBooks1 from "../Images/can_of_books1.png";
import CanBooks2 from "../Images/can_of_books2.png";
import travel1 from "../Images/travelbyond homepage.png";
import { Carousel, Container } from "react-bootstrap";
import travel2 from "../Images/fav part .png";
let content = [
  {
    name: "News Beacon",
    img_src: [NewsBeacon1, NewsBeacon2],
    about: "website of news to know the latest news of the world with ease",
  },
  {
    name: "TravelByond",
    img_src: [travel1, travel2],
    about:
      "know the top travel destination for this year with some information about it",
  },
  {
    name: "Can of Books",
    img_src: [CanBooks1, CanBooks2],
    about: "a library that you can add you favorate books to it ",
  },
  {
    name: "BussMall",
    img_src: [BussMall],
    about:
      "product electronic cataloge to see the product demand before lunching it to the market",
  }
];
export class Work extends Component {
  render() {
    return (
      <div className="work-div">
        <Container id="work" >
        <h1 className="work-h"> Work</h1>
          <div className="work-flex" >
          {content.map((item) => (
            <>
              <div style={{marginTop:"5%"}} >
              <Carousel className= "cont" interval={null}>
                {item.img_src.map((images) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100 carosel-img"
                      src={images}
                      alt="First slide"
                    />
                    <div class="overlay">
                        <h1 style={{display:"block"}}>{item.name}</h1>
                        <p>{item.about}</p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
            </>
          ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Work;
