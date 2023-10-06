import React from "react";
import { useState,useEffect } from "react";
import {ArrowBigLeft,ArrowBigRight} from "lucide-react";
import "./ImageSlider.css"

export function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0)
  function showNextImage(){
    setImageIndex(index => {
        if (index === imageUrls.length-1) return 0
        return index+1
    })

  }

  function showPrevImage(){
    setImageIndex(index => {
        if (index === 0) return imageUrls.length-1
        return index-1
    })
  }

  useEffect(() => {
    const interval = setInterval(showNextImage, 3000); // Change slide every 3 seconds (adjust as needed)
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); 

  return (
  <div style={{width:"100%", height: "100%",position:"relative"}}>
    <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}> 
        {imageUrls.map(url => (
            <img  key={url} src={url} className="img-slider-img" style={{ translate: `${-100 * imageIndex}%` }} />
        ))}
    </div>
    
    <button onClick={showPrevImage} className="img-slider-btn" style={{left:0}}>
        <ArrowBigLeft />
        </button>
    <button onClick={showNextImage} className="img-slider-btn" style={{right:0}}>
        <ArrowBigRight/>
        </button>
  </div>
  );
};