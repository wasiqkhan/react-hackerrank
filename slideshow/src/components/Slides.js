import React from 'react';
import {useState} from "react";

function Slides({slides}) {
    const [index, setIndex] = useState(0);
    const {title,text}=slides[index];
  
  const nextSlide = () => {
     
    setIndex((oldIndex) => {
      let index=oldIndex+1;
      return index
    })

  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = slides.length - 1
      }
      return index
    })
  };
  const resetSlide=()=>{
      setIndex(0)
  }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={index==0 ? true : false} data-testid="button-restart" className="small outlined" onClick={resetSlide}>Restart</button>
                <button disabled={index==0 ? true : false} data-testid="button-prev" className="small" onClick={prevSlide}>Prev</button>
                <button disabled={index >=slides.length-1 ? true : false} data-testid="button-next" className="small" onClick={nextSlide}>Next</button>
            </div>
                    <div id="slide" className="card text-center">
                    <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
          </div>
   
          
        </div>
    );

}

export default Slides;
