import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

class Description extends Component {
  render() {
const { list,
        oneDog,
        descriptionDog,
        handleSubmit,
        onSearchTermChange,
        truncateString,
        fetchDogs,
        singleDogDisplay,
        pics,
        children
       } = this.props;

       console.log(oneDog);
       console.log(descriptionDog);
      return (
      <div>
        {
          <div>
          <h1>{oneDog[1]}</h1>
          <h3>{oneDog[2]}</h3>
           <p>{oneDog[4]}</p>
           <img src={descriptionDog[3]} />
        </div>
        }
    </div>
    )
  }
}

export default Description;
