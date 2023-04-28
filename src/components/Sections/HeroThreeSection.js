
import { Row, Col, Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import React, { useState, useEffect } from 'react'; 


const baseURL = "http://localhost:8084/items/";

const HeroThreeSection = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:8084/items/")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])




  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
            

<div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          
          <table class="table" border={7}>
  <thead class="thead-dark">
            <tr>
              <th >Item Code</th>
              <th>Item Name</th>
              <th>Price(LKR)</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.price}</td>
              </tr>
            ))}</thead>
          </table>
        </>
      )}
    </div>
 
             
           


          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;


