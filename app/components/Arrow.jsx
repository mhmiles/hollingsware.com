import React from 'react';
import { pulse } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  pulse: {
    animationName: pulse,
    animationDuration: '1s',
    animationIterationCount: 'infinite'
  }
})

export default ({color, className}) => {
  console.log(style);

  return (
    <div className={css(style.pulse)+' '+className}>
      <svg id="Layer_1" width="52px" height="56px" data-name="Layer 1" viewBox="0 0 50 54">
        <defs>
          <clipPath id="clip-path" transform="translate(-1 -1)"><path d="M38,28H49L26,3,3,28H14V53H38ZM-9-9H61V65H-9Z" style={{fill: "none", clipRule: "evenodd"}}/></clipPath>
          <clipPath id="clip-path-2" transform="translate(-1 -1)"><rect x="-6" width="64" height="64" style={{fill: "none"}}/></clipPath>
        </defs>
        <title>arrow</title>
        <g style={{clipPath: "url(#clip-path)"}}>
          <g style={{clipPath: "url(#clip-path-2)"}}><polygon points="37 27 48 27 25 2 2 27 13 27 13 52 37 52 37 27" style={{fill: "none", stroke: "#000",strokeLinecap:"round", strokeLinejoin:"round", strokeWidth: "4px"}}/></g>
        </g>
      </svg>
    </div>
  )
}
