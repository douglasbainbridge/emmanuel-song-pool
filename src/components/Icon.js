import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faMale, faFemale, faDrum, faStickyNote, faLaptop, faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faSpotify, faChevronDown, faMale, faFemale, faDrum, faStickyNote, faLaptop, faStar, faSquare, faCheckSquare, faArrowLeft, faArrowRight)

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
    if (props.icon === "chevron") {
        return (
            <span>
                <FontAwesomeIcon
                    style={{
                        transform: props.direction === "up" ? 'rotate(180deg)' : '',
                        transition: 'transform 0.15s'
                    }}
                    icon={
                        {
                            prefix: 'fas',
                            iconName: "chevron-down"
                        }
                    }
                />
            </span>
        )
    }
    if (props.icon === "male") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "male"
                    }
                }
            />
        )
    }
    if (props.icon === "female") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "female"
                    }
                }
            />
        )
    }
    if (props.icon === "tempo") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "drum"
                    }
                }
            />
        )
    }
    if (props.icon === "charts") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "sticky-note"
                    }
                }
            />
        )
    }
    if (props.icon === "tracks") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "laptop"
                    }
                }
            />
        )
    }
    if (props.icon === "star") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'fas',
                        iconName: "star"
                    }
                }
                className="text-yellow"
            />
        )
    }
    if (props.icon === "check box") {
        return (
            <FontAwesomeIcon
                icon={
                    {
                        prefix: 'far',
                        iconName: props.checked ? "check-square" : "square"
                    }
                }
            />
        )
    }
    if (props.icon === "arrow") {
        return (
            <FontAwesomeIcon
                style={{ marginLeft: '6px', marginRight: '6px' }}
                icon={
                    {
                        prefix: 'fas',
                        iconName: props.direction === 'left' ? "arrow-left" : "arrow-right"
                    }
                }
            />
        )
    }
    return null
}