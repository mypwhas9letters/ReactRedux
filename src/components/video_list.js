import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {

  const items = props.videos.map(video => {
    return (
      <VideoListItem video={video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
      />
    )})
  return(
    <ul className="col-md-12 list-group">
      {items}
    </ul>
  )
}

export default VideoList
