import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel className="" data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1661281211646-1addb50c802a"
          alt="woman looking at close on the phone"
        />
        <Carousel.Caption>
          <h6>Embark on an adventure and navigate our digital aisles</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1"
          alt="girl looking at clothes on hanger"
        />
        <Carousel.Caption>
          <h6>
            seeking the perfect garment that seamlessly blends style and comfort for your upcoming special event or casual hangout with friends.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Add more Carousel Items */}
    </Carousel>
  );
}

export default MyCarousel;
