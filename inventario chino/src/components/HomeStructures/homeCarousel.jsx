import React from "react";
import Carousel from "react-bootstrap/Carousel";
//Compenente que muestra las imagenes en forma de carrusel dentro del home.
const homeCarousel = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hotelmousai.com.mx/blog/wp-content/uploads//2021/11/Beef-and-Broccoli.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hotelmousai.com.mx/blog/wp-content/uploads//2021/11/General-Tso-Chicken.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hotelmousai.com.mx/blog/wp-content/uploads//2021/11/Orange-Chicken.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default homeCarousel;
