import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({ imageList }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      {imageList.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img 
            className="carousel-image" 
            src={image.src}
            alt={image.alt}
          /> 

            <Carousel.Caption>
              <h3 className="carousel-h3">{image.caption}</h3>
              <p className="carousel-p">{ image.text }</p>
              <div src={image.src}></div>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;