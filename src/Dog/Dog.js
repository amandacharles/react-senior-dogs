import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'


class Dog extends Component {
  render() {
const { list,
        oneDog,
        descriptionDog,
        handleSubmit,
        onSearchTermChange,
        truncateString,
        fetchDogs,
        singleDogDisplay
       } = this.props;

      return (
      <div>
        <Link className="navi" to="description">View description of dog component</Link>
        <Grid>
          <Row>
            <Col>
          </Col>
            <Col>
        <Carousel>
          {
  oneDog[3].map(ele => (
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={ele}/>
    </Carousel.Item>
  ))
        }
    </Carousel>
                </Col>
              </Row>
          </Grid>
      </div>
    )
  }
}

export default Dog;
