import React from 'react'
import List from '../List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import Carousel from '../Carousel'
import ListColumn from '../ListColumn';

export default function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.songs, 'Call To Worship', 'Declaration & Praise', props.focusSongs)
    const callToWorshipDraw = filterSongBySubCat(props.songs, 'Call To Worship', 'Drawing Near', props.focusSongs)
    const revelationAssurance = filterSongBySubCat(props.songs, 'Revelation', 'Assurance in Christ', props.focusSongs)
    return (
        <Carousel>
            <ListColumn title="Call to Worship">
                <List title="Declaration and Praise" list={callToWorshipDeclaration} />
                <List title="Drawing Near" list={callToWorshipDraw} />
            </ListColumn>
            <ListColumn title="Revelation">
                <List title="Assurance in Christ" list={revelationAssurance} />
            </ListColumn>
        </Carousel>
    )
}
