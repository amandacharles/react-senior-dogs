import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

class Search extends Component {
  render() {
    const { list, oneDog, handleSubmit, singleDogDisplay, onSearchTermChange, truncateString, fetchDogs } = this.props;
    return (
      <div>
        <Grid className>
          <Row>
            <Col>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={onSearchTermChange}/>
        <input type="submit" value="Search" />
        </form>
        </Col>
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
            <h2>{ ele.name.$t } || { ele.sex.$t }</h2>

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
