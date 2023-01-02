import React from "react";
import p4 from "../../images/p4.jpg";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import "./carouselstyle.css";
import { Carousel, CarouselItem, Container, Row, Col } from "react-bootstrap";



const MyCarousel = () => {
  return (
   <>
   <Container>
    <Row>
      <Col>
      <Carousel  autoPlay={true}
    interval={2000}
    controls={true}
    indicators={true}>
        <Carousel.Item>
          <img style={{ maxHeight: "70vh" }} src={p1} className="d-block w-100" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p2} className="d-block w-100 "/>
          <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p3} className="d-block w-100 "/>
          <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p4} className="d-block w-100 "/>
          <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
   </Container>
      
  </>

  );
}


export default MyCarousel;
