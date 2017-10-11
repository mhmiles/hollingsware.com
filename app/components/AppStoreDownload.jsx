import React from 'react';

export default ({appID, className, imageClassName}) => {
  return (
    <a className={className} href={`https://itunes.apple.com/app/apple-store/id${appID}?pt=223150&ct=Hollingsware&mt=8`}>
      <img className={imageClassName} src={require("../assets/download.svg")}/>
    </a>
  )
}
