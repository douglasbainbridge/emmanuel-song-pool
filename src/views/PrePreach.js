import React from 'react'
import List from '../List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import Carousel from '../Carousel'

export default function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.songs, 'Call To Worship', 'Declaration & Praise', props.focusSongs)
    const callToWorshipDraw = filterSongBySubCat(props.songs, 'Call To Worship', 'Drawing Near', props.focusSongs)
    const revelationAssurance = filterSongBySubCat(props.songs, 'Revelation', 'Assurance in Christ', props.focusSongs)
    return (
        <Carousel>
            <div>
                <h2>Call to Worship</h2>
                <List title="Declaration and Praise" list={callToWorshipDeclaration} />
                <List title="Drawing Near" list={callToWorshipDraw} />
            </div>
            <div>
                <h2>Revelation</h2>
                <List title="Assurance in Christ" list={revelationAssurance} />
            </div>
        </Carousel>
    )
}
