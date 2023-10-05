import React from "react";
import { useState } from "react";
import {ArrowBigLeft,ArrowBigRight} from "lucide-react";
import "./ImageSlider.css"

export function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0)

  return (
  <div style={{width:"100%", height: "100%"}}>
    <img src={imageUrls[imageIndex]} className="img-slider-img" />
    <button><ArrowBigLeft /></button>
    <button><ArrowBigRight /></button>
  </div>
  );
};