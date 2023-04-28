import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";


const Footer = () => {
  //Structure & layout of the footer
  return (
    <div className={classes.footer_bg}>
      <Container>
        <Row className={classes.row}>
          <Col lg={6}>
            <div className={classes.info}>
              <p><h3>
                  Kalana Foods
                  </h3>
                </p>
                <p>
                  Solution for easy and flexible getting meals for the<br></br>
                  household.You can trust us anywhere through this platform
                </p>
                <p>
                 2023 All Right reserved
                </p>
              </div>
           
          </Col>
          <Col lg={6}>
            <div className={classes.about}>
              <h3>Contact Us</h3>
              <p>Telephone : +94 11 2189 149</p>
              <p>Email :  kalana.foods7@gmail.com</p>
              <p>Address :  kalana foods, No 534, Preethika Mawatha Pitipana North, Homagama</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  //END
};

export default Footer;
