import React from 'react'
import List from '../components/List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import Carousel from '../components/Carousel'
import ListColumn from '../components/ListColumn';

export default function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.songs, 'Call To Worship', 'Declaration & Praise', props.focusSongs)
    const callToWorshipDraw = filterSongBySubCat(props.songs, 'Call To Worship', 'Drawing Near', props.focusSongs)
    const revelationName = filterSongBySubCat(props.songs, 'Revelation', 'Name of Jesus', props.focusSongs)
    const revelationAssurance = filterSongBySubCat(props.songs, 'Revelation', 'Assurance in Christ', props.focusSongs)
    const revelationSufficiency = filterSongBySubCat(props.songs, 'Revelation', 'Sufficiency of Christ', props.focusSongs)
    const revelationStory = filterSongBySubCat(props.songs, 'Revelation', 'Gospel Story', props.focusSongs)
    const revelationAdoption = filterSongBySubCat(props.songs, 'Revelation', 'Adoption in Christ', props.focusSongs)
    return (
        <Carousel>
            <ListColumn title="Call to Worship">
                <List title="Declaration and Praise" list={callToWorshipDeclaration} />
                <List title="Drawing Near" list={callToWorshipDraw} />
            </ListColumn>
            <ListColumn title="Revelation">
                <List title="Name of Jesus" list={revelationName} />
                <List title="Gospel Story" list={revelationStory} />
                <List title="Sufficiency of Christ" list={revelationSufficiency} />
                <List title="Adoption in Christ" list={revelationAdoption} />
                <List title="Assurance in Christ" list={revelationAssurance} />
            </ListColumn>
        </Carousel>
    )
}
