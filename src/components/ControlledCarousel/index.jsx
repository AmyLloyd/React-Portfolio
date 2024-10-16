import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// const projectTomorrowImageList  = [
//   {
//       id: 1,
//       src: "/assets/project-tomorrow-images/home-desktop.png",
//       alt: "Project Tomorrow Homepage",
//   },
//   {
//       id:2,
//       src: "/assets/project-tomorrow-images/get-involved-desktop.png",
//       alt: "Project Tomorrow Get Involved Page",
//   },
//   {
//       id:3,
//       src: "/assets/project-tomorrow-images/home-mobile.png",
//       alt: "Project Tomorrow homepage (mobile)",
//   }
// ];
// const AllInTogetherImageList  = [
//   {
//       id: 1,
//       src: "/assets/Homepage_top.PNG",
//       alt: "All In Together Homepage",
//   },
//   {
//       id:2,
//       src: "/assets/Homepage_mid_2.PNG",
//       alt: "All In Together Homepage Middle Section",
//   },
//   {
//       id:3,
//       src: "/assets/Programs_top.PNG",
//       alt: "Programs page top section",
//   },
//   {
//       id:4,
//       src: "/assets/Programs_mid_1.PNG",
//       alt: "Programs page middle section",
//   },
//   {
//       id:5,
//       src: "/assets/Programs_bottom.PNG",
//       alt: "Programs page bottom section",
//   },
//   {
//       id:6,
//       src: "/assets/Contact_top.PNG",
//       alt: "Contact page top section"
//   }
// ];

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