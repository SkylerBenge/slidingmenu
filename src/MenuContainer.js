import React, { Component, PureComponent } from "react";

var destination = document.querySelector("#container");

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    };
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  handleMouseDown(e) {
    this.toggleMenu();
    
    console.log("clicked");
    e.stopPropagation();
  }
  
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    console.log("Rendering: MenuContainer");
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible} />
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

class MenuButton extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.handleMouseDown === this.props.handleMouseDown) {
  //     return false;      
  //   } else {
  //     return true;
  //   }
  // }
  
  render() {
    console.log("Rendering: MenuButton");
    return (
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }  
}

class Menu extends Component {
  render() {
    console.log("Rendering: Menu");
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
      </div>
    );
  }  
}

export default MenuContainer;