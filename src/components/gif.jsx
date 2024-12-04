import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2syenU5c2R4emJyZzR5d2VuMHp3N2M4ZDBjOHZsNWZveTkzbXFzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KwzjWfME1fNxC/giphy.gif"
    return (
      <img src={src} alt="Seal scratch" className="gif"/>
    );
  }
}

export default Gif;
