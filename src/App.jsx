import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Avatar from "./Avatar";

class App extends Component {
  state = {
    selected: this.props.avatars[0],
    open: false
  };

  open = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  select = (avatar) => {
    this.setState({
      selected: avatar
    });
  }

  render() {
    const activeClass = this.state.open
      ? "selected circle open"
      : "selected circle";
    return (
      <div className="App">
        <div className={activeClass} onClick={this.open}>
          <img src={this.state.selected.src} alt={this.state.selected.label} />
        </div>
        <div className={this.state.open ? "popover" : "popover hide"}>
          <div className="triangle" />
          <div className="box">
            <div className="title">Choose your avatar</div>
            <div className="avatars">
              {this.props.avatars.map(avatar => {
                return (
                  <Avatar 
                    key={avatar.id}
                    avatar={avatar}
                    selected={this.state.selected}
                    select={this.select}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
}

App.propTypes = {
  avatars: PropTypes.array.isRequired
};

App.defaultProps = {
  avatars: [
    { src: "assets/avatar1.png", label: "Avatar 1", id: 1 },
    { src: "assets/avatar2.png", label: "Avatar 2", id: 2 },
    { src: "assets/avatar3.png", label: "Avatar 3", id: 3 },
    { src: "assets/avatar4.png", label: "Avatar 4", id: 4 },
    { src: "assets/avatar5.png", label: "Avatar 5", id: 5 },
    { src: "assets/avatar6.png", label: "Avatar 6", id: 6 }
  ]
};

export default App;
