import React, { Component } from 'react';

class Avatar extends Component {
  state = {
    loading: false
  };

  handleSelect = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.props.select(this.props.avatar);
      this.setState({
        loading: false
      });
      this.props.toggle(false);
    }, 700);
  };

  render() {
    let iconClass = this.state.loading ? "circle container" : "inactive circle container";
    if (this.props.avatar.id === this.props.selected.id) {
      iconClass = "active circle container"
    }
    return (
      <div className="container">
        {this.state.loading && <div className="loader" />}
        <div
          className={iconClass}
          onClick={this.handleSelect}
        >
          <div className="overlay" />
          <img src={this.props.avatar.src} alt={this.props.avatar.label} />
        </div>
      </div>
    );
  };
}

export default Avatar;
