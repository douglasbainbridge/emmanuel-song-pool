import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
library.add(faSpotify)

export default (props) => {
    if (props.icon === "spotify") {
        return (
            <span>
                <FontAwesomeIcon
                    icon={
                        {
                            prefix: 'fab',
                            iconName: "spotify"
                        }
                    }
                />
            </span>
        )
    }
    return null
}