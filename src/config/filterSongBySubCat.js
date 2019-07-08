module.exports = (songs, cat, subcat) => {
    return songs.filter(s => s.flowCategories
        && s.flowCategories.includes(cat)
        && s.flowSubcategories
        && s.flowSubcategories.includes(subcat)
    )
}