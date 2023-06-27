import React from 'react'
import List from '../components/List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import filterSongBySubCatOnly from '../config/filterSongBySubCatOnly'
import Carousel from '../components/Carousel'
import ListColumn from '../components/ListColumn';

export default function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.songs, 'Call To Worship', 'Declaration & Praise')
    const callToWorshipDraw = filterSongBySubCat(props.songs, 'Call To Worship', 'Drawing Near')
    const kidsIn = filterSongBySubCatOnly(props.songs, 'Kids In')
    const revelationName = filterSongBySubCat(props.songs, 'Revelation', 'Name of Jesus')
    const revelationSufficiency = filterSongBySubCat(props.songs, 'Revelation', 'Sufficiency of Christ')
    const revelationStory = filterSongBySubCat(props.songs, 'Revelation', 'Gospel Story')
    const revelationAdoption = filterSongBySubCat(props.songs, 'Revelation', 'Adoption in Christ')
    const revelationAscended = filterSongBySubCat(props.songs, 'Revelation', 'Ascended Christ')
    const revelationAssurance = filterSongBySubCat(props.songs, 'Revelation', 'Assurance in Christ')
    const revelationEternity = filterSongBySubCat(props.songs, 'Revelation', 'Eternity')
    const revelationLove = filterSongBySubCat(props.songs, 'Revelation', 'Love of God')
    const revelationGoodness = filterSongBySubCat(props.songs, 'Revelation', 'Goodness of God')
    const revelationGreatness = filterSongBySubCat(props.songs, 'Revelation', 'Greatness of God')
    const revelationFaithfulness = filterSongBySubCat(props.songs, 'Revelation', 'Faithfulness of God')
    const revelationHoliness = filterSongBySubCat(props.songs, 'Revelation', 'Holiness of God')
    const revelationSuffering = filterSongBySubCat(props.songs, 'Revelation', 'God in Suffering')
    const responseAdoration = filterSongBySubCat(props.songs, 'Response', 'Adoration')

    const responseReverence = filterSongBySubCat(props.songs, 'Response', 'Reverence & Awe')
    const responseSurrender = filterSongBySubCat(props.songs, 'Response', 'Surrender')
    const responseDependence = filterSongBySubCat(props.songs, 'Response', 'Dependence')
    const responseCelebration = filterSongBySubCat(props.songs, 'Response', 'Celebration')
    const responseKingdom = filterSongBySubCat(props.songs, 'Response', 'Kingdom Come')
    const communionCross = filterSongBySubCat(props.songs, 'Communion', 'The Cross')
    const sendingMission = filterSongBySubCat(props.songs, 'Sending', 'Mission')


    return (
        <Carousel>
            <ListColumn title="Call to Worship">
                <List title="Declaration and Praise" list={callToWorshipDeclaration} />
                <List title="Drawing Near" list={callToWorshipDraw} />
                <List title="Kids In" list={kidsIn} />
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
                <List title="Reverence" list={responseReverence} />
                <List title="Surrender" list={responseSurrender} />
                <List title="Dependence" list={responseDependence} />
                <List title="Celebration" list={responseCelebration} />
                <List title="Kingdom Come" list={responseKingdom} />
            </ListColumn>
            <ListColumn type="preach" />
            <ListColumn title="Communion">
                <List title="The Cross" list={communionCross} />
            </ListColumn>
            <ListColumn title="Sending">
                <List title="Mission" list={sendingMission} />
            </ListColumn>
        </Carousel>
    )
}
