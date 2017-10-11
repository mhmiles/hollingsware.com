import React from 'react'

export default ({ src, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: `
    <video style="width: 100%"
      muted
      autoplay
      loop
      playsinline
      src="${src}"
    />
  ` }}
  />
)
