// src/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item >
        <img className="d-block w-150 "src="1.png"alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-150"src="2.png"alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-150" src="3.png" alt="Third slide" /> 
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-150" src="4.png"alt="Forth slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-150" src="5.png"alt="fifth slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-150"src="6.png"alt="sixth slide"/>
     </Carousel.Item>
   </Carousel>
  );
}
export default ImageCarousel;
