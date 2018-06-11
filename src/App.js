import React, { Component } from 'react';
import './App.css';
// import * as firebase from 'firebase';  
// import {firebaseConnect} from './firebaseConnect';
import Nav from './Nav';
import ListNote from './ListNote';
import {connect} from 'react-redux';
import FormNote from './FormNote';

class App extends Component {
  checkFromDisplay  = () =>{
    if(this.props.statusForm){
      return ( <FormNote/>);
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <div className="row">
            <ListNote/>
            {this.checkFromDisplay()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    statusForm: state.statusEditFrom
  }
}

export default connect(mapStateToProps)(App);

