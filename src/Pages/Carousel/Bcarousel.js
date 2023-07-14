import React from "react";
import p1 from "../../images/Basketball/p1.jpg";
import p2 from "../../images/Basketball/p2.jpg";
import p3 from "../../images/Basketball/p3.jpg";
import p4 from "../../images/Basketball/p4.jpg";
import p5 from "../../images/Basketball/p5.jpg";
import p6 from "../../images/Basketball/p6.jpg";
import p7 from "../../images/Basketball/p7.jpg";
import p8 from "../../images/Basketball/p8.jpg";
import p9 from "../../images/Basketball/p9.jpg";
import p10 from "../../images/Basketball/p10.jpg";
import p11 from "../../images/Basketball/p11.jpg";
import p12 from "../../images/Basketball/p12.jpg";
import p13 from "../../images/Basketball/p13.jpg";
import p14 from "../../images/Basketball/p14.jpg";
import p15 from "../../images/Basketball/p15.jpg";
import p16 from "../../images/Basketball/p16.jpg";
import p17 from "../../images/Basketball/p17.jpg";
import p18 from "../../images/Basketball/p18.jpg";
import p19 from "../../images/Basketball/p19.jpg";
import p20 from "../../images/Basketball/p20.jpg";
import p21 from "../../images/Basketball/p21.jpg";
import p22 from "../../images/Basketball/p22.jpg";

import "./carouselstyle.css";
import { Carousel,Container, Row, Col } from "react-bootstrap";



const Bcarousel = () => {
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
          <img style={{ maxHeight: "60vh" }} src={p1} className=" w-100" alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p2} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p3} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p4} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p5} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p6} className="w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p7} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p8} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p9} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p10} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p11} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p12} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p13} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p14} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p15} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p16} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p17} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p18} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p19} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p20} className="w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p21} className=" w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p22} className=" w-100" alt=""/>
        </Carousel.Item>

      </Carousel>
      </Col>
    </Row>
   </Container>
      
  </>

  );
}


export default Bcarousel;
