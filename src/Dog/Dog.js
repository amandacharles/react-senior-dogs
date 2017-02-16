import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';

class Dog extends Component {
  render() {
const { list,
        oneDog,
        handleSubmit,
        onSearchTermChange,
        truncateString,
        fetchDogs,
        singleDogDisplay,
       } = this.props;

      return (
      <div>
        <Carousel>
          {
  oneDog[3].map(ele => (
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={ele}/>
      <Carousel.Caption>
        <h3></h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))
        }
    </Carousel>


          <Grid>
            <Row>
              <Col>

              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}

export default Dog;
