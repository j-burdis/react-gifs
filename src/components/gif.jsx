import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    // Avoid re-rendering if the id hasn't changed
    const { id } = this.props;
    return id !== nextProps.id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props; // Destructure props
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      // <img
      //   src={src}
      //   alt="GIF"
      //   className="gif"
      //   onClick={this.handleClick}
      //   role="button"
      //   tabIndex={0}
      //   onKeyDown={(event) => {
      //     if (event.key === 'Enter' || event.key === ' ') {
      //       this.handleClick();
      //     }
      //   }}
      // />
      <div
        className="gif-container"
        onClick={this.handleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            this.handleClick();
          }
        }}
        role="button"
        tabIndex={0}
        style={{ display: 'inline-block' }}
      >
        <img src={src} alt="GIF" className="gif" />
      </div>
    );
  }
}

export default Gif;
