module.exports = (songs, focusSongs) => {
    return songs.filter(s =>
        (s.focusList || !focusSongs)
    )
}