import React, {Component} from 'react';
//import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

// const app = new Clarifai.App({
//  apiKey: 'b5f320e35907463ab6cbf62df59fc9d4'
// });

const particleOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area:800
      }
    }
  }
}

const intialState = {
      input: '',
      imageUrl:'',
      box:'',
      route: 'signin',
      isSignedIn: false,
      user: {
          id: '',
          name: '',
          email:'',
          entries:'',
          joined: ''
      }
}

class App extends Component{
  constructor(){
    super();
    this.state = intialState;
  }

  calculateFaceLocation = (data) =>{
    const clarifaiObject = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol:clarifaiObject.left_col * width,
      rightCol:width - (clarifaiObject.right_col * width),
      topRow:clarifaiObject.top_row * height,
      bottomRow:height - (clarifaiObject.bottom_row * height)
    }
  }

  displayBoundary = (box) =>{
    this.setState({box: box})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://immense-tundra-48033.herokuapp.com/imageurl' ,
      {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
    })
    .then(response => response.json())
    .then(response => {
      this.displayBoundary(this.calculateFaceLocation(response));

      fetch('https://immense-tundra-48033.herokuapp.com/image' ,
      {
        method: 'PUT',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user , {entries: count}))
      })
    })
    .catch(error => console.log(error));
  }

  // onRouteChange = (route) =>{
  //   if(route === 'home')
  //     this.setState({isSignedIn: true})
  //   else this.setState({isSignedIn: false})
  //    this.setState({route: route})
  // }

  onRouteChange = (route) =>{
    if(route === 'home')
      this.setState({isSignedIn: true})
    else this.setState(intialState)
     this.setState({route: route})
  }

  loadUser = (data) =>{
    this.setState({user:{
      id: data.id,
      name: data.name,
      email:data.email,
      entries:data.entries,
      joined: data.joined

    }})
  }

  render(){
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        { this.state.route === 'home'  
          ? <div>
              <Logo />   
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div>
          : (this.state.route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>  
            )
        }
      </div>
     );
  }
}

export default App;
