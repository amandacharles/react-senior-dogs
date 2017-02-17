import React, { Component } from 'react';
import Dog from './Dog/Dog';
import Favorites from './Favorites/Favorites';
import Search from './Search/Search';
import Description from './Description/Description'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import axios from 'axios';
import { Button, Grid, Row, Col, Image, Navbar, NavItem, Nav } from 'react-bootstrap';
import './App.css';

const NotFound = () => <div>Not found</div>

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      oneDog: [],
      descriptionDog: [],
      searchTerm: null,
      favorites: []
    }

    this.fetchDogs = this.fetchDogs.bind(this)
    this.truncateString = this.truncateString.bind(this)
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cloneElement = this.cloneElement.bind(this);
    this.singleDogDisplay = this.singleDogDisplay.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
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
       list: data.petfinder.pets.pet
    })
  })
}

  fetchFavorites(){
    axios.get('/api/favorites')
    .then(({ data }) => {
      this.setState({
         favorites : data
      })
    })
  }

  addToFavorites(){
    axios.post('/api/favorites', {
      name
    })
  }

  // function createPost() {
  //     $http.post('/api/posts', vm.post)
  //       .then(response => {
  //         response.data.comments = []
  //         vm.posts.push(response.data)
  //         vm.togglePostForm()
  //         delete vm.post
  //       })
  //   }


  deleteFromFavorites(){

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
        descriptionDog: this.state.descriptionDog,
        favorites: this.state.favorites,
        handleSubmit: this.handleSubmit,
        onSearchTermChange: this.onSearchTermChange,
        truncateString: this.truncateString,
        singleDogDisplay: this.singleDogDisplay,
        addToFavorites: this.addToFavorites,
        deleteFromFavorites: this.deleteFromFavorites,
        fetchFavorites: this.fetchFavorites
      })
    }
  }

  singleDogDisplay(id, name, sex, photos, description){
    let photoArray = [];
    let gender = '';

    if (sex == 'M') {
      gender = 'Male'
    } else {
      gender = 'Female'
    }

    for (const element of photos) {
      if (element["@size"] === 'x') {
        photoArray.push(element["$t"])
      }
    }
    this.state.oneDog.push(id, name, gender, photoArray, description)
    this.state.descriptionDog.push(id, name, gender, ...photoArray, description)
  }

  render() {
    return <div>
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Find Me An Old Dog</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#"><Link className="navi" to="favorites">favorite dogs</Link></NavItem>
      <NavItem eventKey={2} href="#"><Link className="navi" to="search">search</Link></NavItem>
    </Nav>
  </Navbar>

      {this.cloneElement()}

    </div>
  }
}

export default class App extends Component {

  render() {
    return (
      <div>
        <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Search} />
          <Route path='favorites' component={Favorites} />
          <Route path='search' component={Search}/>
          <Route path='dog' component={Dog} />
          <Route path='description' component={Description} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </div>
    );
  }
}
