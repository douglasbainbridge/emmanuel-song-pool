module.exports = (songs, cat, subcat, focusSongs) => {
    return songs.filter(s => s.flowCategories
        && s.flowCategories.includes(cat)
        && s.flowSubcategories
        && s.flowSubcategories.includes(subcat)
        && (s.focusList || !focusSongs)
    )
}