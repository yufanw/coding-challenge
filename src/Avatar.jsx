import React, { Component } from 'react';

class Avatar extends Component {

  handleSelect = () => {
    this.props.select(this.props.avatar);
  }

  render() {
    let iconClass = "icon circle container";
    let avatarClass = "avatar";
    let overlayClass = "overlay"
    if (this.props.avatar.id === this.props.selected.id) {
      iconClass = "active circle container"
    }
    return (
      <div
        className={iconClass}
        onClick={this.handleSelect}
      >
        <img className={avatarClass} src={this.props.avatar.src} alt={this.props.avatar.label} />
        <div className={overlayClass} />
      </div>
    );
  }
}

export default Avatar;
