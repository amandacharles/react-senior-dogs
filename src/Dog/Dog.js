import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Search from '../Search/Search';
import Description from '../Description/Description'




class Dog extends Component {

constructor(props){
  super(props)

  this.handleClick = this.handleClick.bind(this)
}

  handleClick(){
    this.props.fetchFavorites()
  }

  render() {
const { list,
        oneDog,
        favorites,
        descriptionDog,
        handleSubmit,
        onSearchTermChange,
        truncateString,
        fetchDogs,
        singleDogDisplay,
        addToFavorites
       } = this.props;

      return (
        <div>
          <Grid>
            <Row>
              <Col sHidden md={4}></Col>
              <Col className="description" s={12} md={4}><h1>{oneDog[1]}</h1></Col>
              <Col sHidden md={4}></Col>
            </Row>
            <Row className="show-grid">
              <Carousel>
                {
                  oneDog[3].map(ele => (
                    <Carousel.Item>
                      <img width={900} height={500} alt="900x500" src={ele}/>
                    </Carousel.Item>
                  ))
                }
              </Carousel>
            </Row>
            <Row>
              <Col className="description">{oneDog[4]}</Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.handleClick} bsSize="large" bsStyle="warning"><Link className="navi" to="favorites">Add to Favorites</Link></Button>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

export default Dog;
