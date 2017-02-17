import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Description from '../Description/Description';

class Search extends Component {
  render(props) {
    const {
      list,
      oneDog,
      descriptionDog,
      handleSubmit,
      singleDogDisplay,
      onSearchTermChange,
      truncateString,
      fetchDogs } = this.props;

    return (
      <div>
        <Grid className>
          <Row className="show-grid">
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                    <h3>Search for Dogs by zipcode:</h3>
                  <form onSubmit={handleSubmit}>
                <input type="text" onChange={onSearchTermChange}/>
                <div><p></p></div>
                <input type="submit" value="Fetch!" />
                </form></Col>
                <Col xsHidden md={4}></Col>
              </Row>
        <div>
        <Row >
        {
        list.map(ele => (
          <Col key={ele.id.$t} s={12} md={4} l={3}>

            <Link to='dog' className="hvr-grow"
              onClick={() => singleDogDisplay(
                ele.id.$t,
                ele.name.$t,
                ele.sex.$t,
                ele.media.photos.photo,
                ele.description.$t)
              }>
            <h2>{ ele.name.$t }</h2>

            <Image  src={ele.media.photos.photo[2].$t} rounded responsive />
            <p responsive >{truncateString(ele.description.$t, 200)}</p>
        </Link>
        </Col>
        ))
        }
        </Row>
        </div>
        </Grid>
      </div>
    );
  }
}

export default Search;
