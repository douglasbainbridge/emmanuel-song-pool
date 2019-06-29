import React from 'react'
import List from '../components/List'
import ListColumn from '../components/ListColumn';
import filterSongByFocus from '../config/filterSongByFocus'


export default function FullList(props) {
    const songs = filterSongByFocus(props.songs, props.focusSongs)
    return (
        <ListColumn title="Full List">
            <List title="" list={songs} />
        </ListColumn>
    )
}
