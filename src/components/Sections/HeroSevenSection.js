import React, { useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const HeroSevenSection = () => {
  const emailRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formValue = emailRef.current.value;

    if (
      formValue.trim().length > 0 &&
      formValue.includes("@") &&
      formValue.includes(".") &&
      !formValue.includes(" ")
    ) {
      Swal.fire({
        title: "Successful!",
        text: "Your email has been added to our list.",
        icon: "success",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "OOPS!",
        text: "Please input a valid email address.",
        icon: "error",
      });
    }
  };

  return (
    <section id="subscribe">
      <Container>
       
      </Container>
    </section>
  );
};

export default HeroSevenSection;
