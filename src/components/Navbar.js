import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.query);
      this.setState({ query: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div className="navbar">
        <input
          type="text"
          placeholder="Search for a Movie..."
          value={this.state.query}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Navbar;