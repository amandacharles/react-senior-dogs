import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Search from '../Search/Search';
import Description from '../Description/Description'
import Dog from '../Dog/Dog'

class Favorites extends Component {
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
        Favorite favorites favorites
        {
        }
      </div>
    );
  }
}

export default Favorites;
