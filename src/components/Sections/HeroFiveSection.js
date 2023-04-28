import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFiveSection.module.css";


const HeroFiveSection = () => {

  return (
    <section id="mobile-app">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Srilankan , Indian and Chineese Foods</h2>
              <p>Enjoy better experience</p>

              <p> Any kind of Srilankan traditinal foods, Indian foods and chineese foods you can buy from us freshly and cheaper price
              </p>
            </div>
          </Col>
        </Row>

     
      </Container>
    </section>
  );
 
};

export default HeroFiveSection;
