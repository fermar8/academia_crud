import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
    altText: 'Professors',
    caption: 'Els nostres professors',
    descr: <Link className="link-carousel" to="/professors">Professors</Link>
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    altText: 'Alumnes',
    caption: 'Els nostres alumnes',
    descr: <Link className="link-carousel" to="/alumnes">Alumnes</Link>
  },
  {
    src: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    altText: 'Programació',
    caption: 'Les nostres classes',
    descr: <Link className="link-carousel" to="/classes">Classes</Link>
  }
];

function Inici(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{width: "100%", height: "auto"}} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.descr} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="principal">
    <h1>Benvingut a l'Academia</h1>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}

export default Inici;
