module.exports = (content) => {
    if (!content) { return ([]) }
    if (!content.items) { return ([]) }
    return content.items.map(c => c.fields)
}