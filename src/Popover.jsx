import React, { Component } from 'react';
import Avatar from "./Avatar";

export default class Popover extends Component {
  render() {
    return (
      <div className={this.props.open ? "popover" : "popover hide"}>
        <div className="triangle" />
        <div className="box">
          <div className="title">Choose your avatar</div>
          <div className="avatars">
            {this.props.avatars.map(avatar => {
              return (
                <Avatar 
                  key={avatar.id}
                  avatar={avatar}
                  selected={this.props.selected}
                  select={this.props.select}
                  toggle={this.props.toggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
