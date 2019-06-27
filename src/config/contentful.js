const contentful = require("contentful");
let client
client = contentful.createClient({
    space: 'nkx4mjs43g1a',
    accessToken: 'AJETm98BuwXsHI85-2o5pHoQLyvGYxSH5tGzfFYVTDM'
});
module.exports = client