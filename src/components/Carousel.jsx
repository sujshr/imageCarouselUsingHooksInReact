import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel1() {
  const [index, updateIndex] = useState(0);
  const [title, updateTitle] = useState(images[0].title);
  const [subtitle, updateSubTitle] = useState(images[0].subtitle);
  const [source, updateSource] = useState(images[0].img);

  useEffect(() => {
    updateTitle(images[index].title);
    updateSubTitle(images[index].subtitle);
    updateSource(images[index].img);
  }, [index]);

  function handleLeftClick() {
    index === 0
      ? updateIndex(images.length - 1)
      : updateIndex((prevIndex) => prevIndex - 1);
  }
  function handleRightClick() {
    index === images.length - 1
      ? updateIndex(0)
      : updateIndex((prevIndex) => prevIndex + 1);
  }
  return (
    <>
      <div id="container">
        <div id="left" className="arrow" onClick={handleLeftClick}>
          <ArrowBackIosIcon />
        </div>

        <div id="image">
          <h3 id="title">{title}</h3>
          <div id="imgContainer">
            <img src={source} alt="" className="img" />
          </div>

          <h5 id="subtitle">{subtitle}</h5>
        </div>

        <div id="right" className="arrow" onClick={handleRightClick}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
}

export default Carousel1;
