import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Picker.css";
import Popover from "./Popover";

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.avatars[0],
      open: false
    };
    this.popoverRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  toggle = (bool) => {
    this.setState({
      open: bool
    });
  };
  

  select = (avatar) => {
    this.setState({
      selected: avatar
    });
  }

  handleClickOutside = (event) => {
    console.log(event.target);
    console.log(this.popoverRef.current);
    if (this.popoverRef && this.popoverRef.current.contains(event.target)) {
      return;
    }
    this.toggle(false);
  }

  render() {
    const activeClass = this.state.open
      ? "selected circle open"
      : "selected circle";
    return (
      <div className="picker" ref={this.popoverRef}>
        <div className={activeClass} onClick={() => {this.toggle(true)}}>
          <img src={this.state.selected.src} alt={this.state.selected.label} />
        </div>
        <div>
          <Popover 
            open={this.state.open}
            avatars={this.props.avatars}
            selected={this.state.selected}
            select={this.select}
            toggle={this.toggle}
          />
        </div>
      </div>
    );
  };
}

Picker.propTypes = {
  avatars: PropTypes.array.isRequired
};

Picker.defaultProps = {
  avatars: [
    { src: "assets/avatar1.png", label: "Avatar 1", id: 1 },
    { src: "assets/avatar2.png", label: "Avatar 2", id: 2 },
    { src: "assets/avatar3.png", label: "Avatar 3", id: 3 },
    { src: "assets/avatar4.png", label: "Avatar 4", id: 4 },
    { src: "assets/avatar5.png", label: "Avatar 5", id: 5 },
    { src: "assets/avatar6.png", label: "Avatar 6", id: 6 }
  ]
};

export default Picker;
