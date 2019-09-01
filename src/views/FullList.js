import React from 'react'
import List from '../components/List'
import ListColumn from '../components/ListColumn';

const toCsv = (songs) => {
    if (!songs) { return null }
    let rows = "\"Title\",\"Artist\",\"Focus List\",\"Male Key\",\"Female Key\",\"BPM\",\"Categories\",\"Youtube\",\"OnSong\",\"Chords\",\"Has Notes\"\n\""
    rows += songs.map(s => {
        let hasNotes = ''
        if (s.notes) {
            if (s.notes.content.length > 0) { hasNotes = 'Yes' }
        }
        return [s.title || '', s.artist || '', s.focusList === true ? 'Yes' : '', s.maleKey || '', s.femaleKey || '', s.bpm || '', s.flowSubcategories || '', s.youtubeLink || '', s.onSongLink || '', s.chordsLink || '', hasNotes].join("\",\"")
    }).join("\"\n\"")

    let csvContent = "data:text/csv;charset=utf-8," + rows;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "SongPool.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}

export default function FullList(props) {
    return (
        <ListColumn title="Full List">
            <List title="" list={props.songs} />
            <button
                className="action-btn"
                onClick={() => {
                    toCsv(props.songs)
                }}
            >
                Export to CSV
            </button>
        </ListColumn>
    )
}
