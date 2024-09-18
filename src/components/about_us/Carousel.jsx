import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";
import data from "./data";

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC sm:block hidden">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide bg-bg-dark border-3 border-bg-dark"
              style={{
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflectionf"
              style={{
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns mt-24 hidden sm:flex">
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="2x"
        />
      </div>

      {/* Mobile */}
      <ul className="block sm:hidden">
        {data.map((service) => (
          <div className="sliderContent m-4 rounded-3xl bg-bg-dark border-3 border-bg-dark flex flex-col justify-center items-center">
            <span className="text-org-yellow mt-5">{service.icon}</span>
            <h2 className="text-2xl font-Graphik">{service.title}</h2>
            <p className="bg-org-dark p-3 border-2 border-org-yellow rounded-2xl text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </ul>
    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent flex flex-col justify-center items-center">
      <span className="text-org-yellow mt-5">{props.icon}</span>
      <h2 className="text-2xl font-Graphik">{props.title}</h2>
      <p className="bg-org-dark p-3 border-2 border-org-yellow rounded-2xl text-center">
        {props.desc}
      </p>
    </div>
  );
};
