import React from 'react'
import List from '../components/List'
// import filterSongBySubCat from '../config/filterSongBySubCat'
import filterSongBySubCatOnly from '../config/filterSongBySubCatOnly'
import Carousel from '../components/Carousel'
import ListColumn from '../components/ListColumn';

export default function PostPreach(props) {
    const callToWorshipDeclaration = filterSongBySubCatOnly(props.songs, 'Declaration & Praise')
    const callToWorshipDraw = filterSongBySubCatOnly(props.songs, 'Drawing Near')
    const kidsIn = filterSongBySubCatOnly(props.songs, 'Kids In')
    const revelationName = filterSongBySubCatOnly(props.songs, 'Name of Jesus')
    const revelationSufficiency = filterSongBySubCatOnly(props.songs, 'Sufficiency of Christ')
    const revelationStory = filterSongBySubCatOnly(props.songs, 'Gospel Story')
    const revelationAdoption = filterSongBySubCatOnly(props.songs, 'Adoption in Christ')
    const revelationAscended = filterSongBySubCatOnly(props.songs, 'Ascended Christ')
    const revelationAssurance = filterSongBySubCatOnly(props.songs, 'Assurance in Christ')
    const revelationEternity = filterSongBySubCatOnly(props.songs, 'Eternity')
    const revelationLove = filterSongBySubCatOnly(props.songs, 'Love of God')
    const revelationGoodness = filterSongBySubCatOnly(props.songs, 'Goodness of God')
    const revelationGreatness = filterSongBySubCatOnly(props.songs, 'Greatness of God')
    const revelationFaithfulness = filterSongBySubCatOnly(props.songs, 'Faithfulness of God')
    const revelationHoliness = filterSongBySubCatOnly(props.songs, 'Holiness of God')
    const revelationSuffering = filterSongBySubCatOnly(props.songs, 'God in Suffering')
    const responseAdoration = filterSongBySubCatOnly(props.songs, 'Adoration')
    const responseReverence = filterSongBySubCatOnly(props.songs, 'Reverence & Awe')
    const responseSurrender = filterSongBySubCatOnly(props.songs, 'Surrender')
    const responseDependence = filterSongBySubCatOnly(props.songs, 'Dependence')
    const responseCelebration = filterSongBySubCatOnly(props.songs, 'Celebration')
    const responseKingdom = filterSongBySubCatOnly(props.songs, 'Kingdom Come')
    const communionCross = filterSongBySubCatOnly(props.songs, 'The Cross')
    const sendingMission = filterSongBySubCatOnly(props.songs, 'Mission')


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
            <ListColumn type="preach" />
            <ListColumn title="Communion">
                <List title="The Cross" list={communionCross} />
            </ListColumn>
            <ListColumn title="Revelation  ...or">
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
            <ListColumn title="Sending">
                <List title="Mission" list={sendingMission} />
            </ListColumn>
        </Carousel>
    )
}
