import React from 'react'
import List from '../components/List'
import ListColumn from '../components/ListColumn';


export default function FullList(props) {
    return (
        <ListColumn title="Full List">
            <List title="" list={props.songs} />
        </ListColumn>
    )
}
