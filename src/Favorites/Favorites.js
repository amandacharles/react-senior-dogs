import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Search from '../Search/Search';
import Description from '../Description/Description'
import Dog from '../Dog/Dog'

class Favorites extends Component {
  constructor(props){
    super(props)
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
            addToFavorites,
            fetchFavorites
           } = this.props;
           console.log(favorites);
    return (
      <div>
        <Grid>
        <Row >
          {
          favorites.map(ele => (
            <Col key={ele.id} s={12} md={4} l={3}>
              <h2>{ ele.name }</h2>

              <Image src={ele.img} rounded responsive />
              <p responsive >{truncateString(ele.description, 200)}</p>
          </Col>
          ))
          }

        </Row>
      </Grid>
      </div>
    );
  }
}

export default Favorites;
