import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    username: "",
  };

  onChange = (e) => {
      this.setState({
          username: e.target.value
      })
  }

  onClick = (e) => {
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.onChange} />
        <button onClick={this.onClick}>Search</button>
      </div>
    );
  }
}
