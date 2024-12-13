import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // don't call render if props.id did not change
    return this.props.id !== nextProps.id;
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
