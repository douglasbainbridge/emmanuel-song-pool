import React from 'react'
import List from '../components/List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import Carousel from '../components/Carousel'
import ListColumn from '../components/ListColumn';

export default function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.songs, 'Call To Worship', 'Declaration & Praise', props.focusSongs)
    const callToWorshipDraw = filterSongBySubCat(props.songs, 'Call To Worship', 'Drawing Near', props.focusSongs)
    const revelationName = filterSongBySubCat(props.songs, 'Revelation', 'Name of Jesus', props.focusSongs)
    const revelationSufficiency = filterSongBySubCat(props.songs, 'Revelation', 'Sufficiency of Christ', props.focusSongs)
    const revelationStory = filterSongBySubCat(props.songs, 'Revelation', 'Gospel Story', props.focusSongs)
    const revelationAdoption = filterSongBySubCat(props.songs, 'Revelation', 'Adoption in Christ', props.focusSongs)
    const revelationAscended = filterSongBySubCat(props.songs, 'Revelation', 'Ascended Christ', props.focusSongs)
    const revelationAssurance = filterSongBySubCat(props.songs, 'Revelation', 'Assurance in Christ', props.focusSongs)
    const revelationEternity = filterSongBySubCat(props.songs, 'Revelation', 'Eternity', props.focusSongs)
    const revelationLove = filterSongBySubCat(props.songs, 'Revelation', 'Love of God', props.focusSongs)
    const revelationGoodness = filterSongBySubCat(props.songs, 'Revelation', 'Goodness of God', props.focusSongs)
    const revelationGreatness = filterSongBySubCat(props.songs, 'Revelation', 'Greatness of God', props.focusSongs)
    const revelationFaithfulness = filterSongBySubCat(props.songs, 'Revelation', 'Faithfulness of God', props.focusSongs)
    const revelationHoliness = filterSongBySubCat(props.songs, 'Revelation', 'Holiness of God', props.focusSongs)
    const revelationSuffering = filterSongBySubCat(props.songs, 'Revelation', 'God in Suffering', props.focusSongs)
    const responseAdoration = filterSongBySubCat(props.songs, 'Response', 'Adoration', props.focusSongs)


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
                <List title="Ascended Christ" list={revelationAscended} />
                <List title="Assurance in Christ" list={revelationAssurance} />
                <List title="Eternity" list={revelationEternity} />
                <List title="Love of God" list={revelationLove} />
                <List title="Goodness of God" list={revelationGoodness} />
                <List title="Greatness of God" list={revelationGreatness} />
                <List title="Faithfulness of God" list={revelationFaithfulness} />
                <List title="Holiness of God" list={revelationHoliness} />
                <List title="God in Suffering" list={revelationSuffering} />
            </ListColumn>
            <ListColumn title="Response">
                <List title="Adoration" list={responseAdoration} />
            </ListColumn>
            <ListColumn title="Preach">
            </ListColumn>
            <ListColumn title="Communion">
            </ListColumn>
            <ListColumn title="Revelation/Response/Sending">
            </ListColumn>
        </Carousel>
    )
}
