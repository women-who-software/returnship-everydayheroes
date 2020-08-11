import React from "react"
import podcastCover from "../images/eh__cover.png"

import podcastListStyles from "./podcast_list.module.scss"

const PodList = props => {
  return (
    <div className={podcastListStyles.container}>

        <div className={podcastListStyles.podcastGrid}>

            <div className={podcastListStyles.podcastGridItem}>
                <div className={podcastListStyles.episodeCover}> 
                    <img className={podcastListStyles.img_ep_cover}
                    src={podcastCover}
                    alt="podcast episode cover"></img>  
                </div>
                <div className={podcastListStyles.episodeHeader}>
                    <p className={podcastListStyles.episodeNumber}>
                        <span className={podcastListStyles.seasonNumber}>
                        S1
                        </span>
                        <span className={podcastListStyles.seasonEpisodeNumber}>
                        EP1
                        </span>
                        </p>

                        <h3 className={podcastListStyles.episodeInfoTitle}>
                        Title of the podcast
                        </h3>
                        <p>
                            <span className={podcastListStyles.episodeGuestName}>
                            Guest Name
                            </span>
                        </p>
                        <p>
                            <span className={podcastListStyles.episodePublishedDate}>
                            May 04, 2002
                            </span>
                        </p>
                </div>
            
            </div>
        
        
        </div>

    </div>
  )
}

export default PodList
