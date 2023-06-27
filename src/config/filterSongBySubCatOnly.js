module.exports = (songs, subcat) => {
    return songs.filter(s =>
        s.flowSubcategories
        && s.flowSubcategories.includes(subcat)
    )
}