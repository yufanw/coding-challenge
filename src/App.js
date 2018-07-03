import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  state = {
    selected: this.props.avatars[0]
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <img src={this.state.selected.src} alt={this.state.selected.label} />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
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
