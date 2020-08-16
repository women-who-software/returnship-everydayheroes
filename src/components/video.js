import React from "react"
const Video = ({ videoSrcURL, title, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      width= "100%"
      height= "360"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video