import React, { Component } from 'react';
import Dog from './Dog/Dog';
import Favorites from './Favorites/Favorites';
import Search from './Search/Search';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import axios from 'axios';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import './App.css';

const NotFound = () => <div>Not found</div>

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      oneDog: [],
      searchTerm: null
    }

    this.fetchDogs = this.fetchDogs.bind(this)
    this.truncateString = this.truncateString.bind(this)
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cloneElement = this.cloneElement.bind(this);
    this.singleDogDisplay = this.singleDogDisplay.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.getInitialState = this.getInitialState.bind(this);

  }

onSearchTermChange(event){
      this.setState({ searchTerm: event.target.value})
    }

handleSubmit(event){
  event.preventDefault()

  this.fetchDogs()
}

fetchDogs(){

  axios.get('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=2d2685ee8c7cbfa08366ece6e45d8ddd&location='+this.state.searchTerm+'&age=senior&animal=dog&output=full&format=json')
  .then(({ data }) => {
    this.setState({
       list:data.petfinder.pets.pet
    })
  })
}

  truncateString(str, num) {
    if (num > str.length) {
      return str;
    }
    else if (num >= 3) {
      return str.slice(0, num - 3) + '...';
    }
    else if (num < 3) {
      return str.slice(0, num) + '...';
    }
  }

  cloneElement(){
    if(this.props.children){
      return React.cloneElement(this.props.children, {
        searchTerm: this.state.searchTerm,
        fetchDogs: this.fetchDogs,
        list: this.state.list,
        oneDog: this.state.oneDog,
        handleSubmit: this.handleSubmit,
        onSearchTermChange: this.onSearchTermChange,
        truncateString: this.truncateString,
        singleDogDisplay: this.singleDogDisplay
      })
    }
  }

  singleDogDisplay(id, name, sex, photos, description){
    let photoArray = [];

    for (const element of photos) {
      // console.log(element["@size"]);
      if (element["@size"] === 'x') {
        photoArray.push(element["$t"])
        // console.log(photoArray);
      }
    }

    console.log(photos);

    this.state.oneDog.push(id, name, sex, photoArray, description)
    console.log(this.state.oneDog);

  }

  // Carousel
  // getInitialState() {
  //   return {
  //     index: 0,
  //     direction: null
  //   };
  // }
  //
  // handleSelect(selectedIndex, e) {
  //   alert('selected=' + selectedIndex + ', direction=' + e.direction);
  //   this.setState({
  //     index: selectedIndex,
  //     direction: e.direction
  //   });
  // }
  // *********

  render() {
    return <div>NAVIGATE ME
      <div>
        {/* <Link to="dog">Dog  </Link> */}
        <Link to="favorites"> -- Favorites --  </Link>
        <Link to="search"> Search   </Link>
        {this.cloneElement()}

      </div>
    </div>
  }
}

// const Main = (props) =>
//   <div>NAVIGATE ME
//     <div>
//     <Link to="dog">Dog  </Link>
//     <Link to="favorites"> -- Favorites --  </Link>
//     <Link to="search"> Search   </Link>
//     {props.children}
//   </div>
//   </div>

export default class App extends Component {
// class App extends Component {

  render() {
    return (
      <div>
        <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Search} />
          <Route path='favorites' component={Favorites} />
          <Route path='search' component={Search}/>
          <Route path='dog' component={Dog} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
        {/* <Grid className>
          <Row>
            <Col>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onSearchTermChange}/>
        <input type="submit" value="Search" />
      </form>
    </Col>
  </Row>
      <div>
        <Row >
      {
        this.state.list.map(ele => (
          <Col s={12} md={4} l={3}>

            <Link to='#' className="hvr-grow">
            <h2>{ ele.name.$t } || { ele.sex.$t }</h2>

            <Image src={ele.media.photos.photo[2].$t} rounded responsive />
            <p responsive >{this.truncateString(ele.description.$t, 200)}</p>
        </Link>
      </Col>
        ))
      }
    </Row>
      </div>
    </Grid> */}
    </div>
    );
  }
}

// export default App;
