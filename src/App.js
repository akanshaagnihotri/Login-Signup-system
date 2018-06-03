import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Modal from './Components/Modal';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showLogin:false,
      showSignUp:false,
      userLoggedIn:false
    }
    this.openLoginModal=this.openLoginModal.bind(this);
    this.openSignUpModal=this.openSignUpModal.bind(this);
    this.closeSignUpModal=this.closeSignUpModal.bind(this);
    this.closeLoginModal=this.closeLoginModal.bind(this);
  }
  openLoginModal(){
   this.setState({
    showLogin:true,
    showSignUp:false
   })
   
  }
  openSignUpModal(){
   this.setState({
    showSignUp:true,
    showLogin:false
   })
   
  }
  closeSignUpModal(){
  this.setState({
    showSignUp:false
  })
  }
  closeLoginModal(){
  this.setState({
    showLogin:false
  })
  }
  render() {
    return (
      <div>
     <NavBar userLoggedIn={this.state.userLoggedIn} openSignUp={this.openSignUpModal} openLogin={this.openLoginModal} showBox={this.state.show} ></NavBar>
     <Modal showBox={this.state.showSignUp} closeBox={this.closeSignUpModal}>
        <SignUpForm/>
     </Modal>
     <Modal showBox={this.state.showLogin} closeBox={this.closeLoginModal}>
         <LoginForm/>
     </Modal>
     
     </div>
    );
  }
}

export default App;
