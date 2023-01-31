const axios = require('axios')
const cheerio = require('cheerio')

const AnyaPikaWiki = async (query) => {
const res = await axios.get(`https://www.daraz.lk/catalog/?q=${query}&_keyori=ss&from=input&spm=a2a0e.searchlistcategory.search.go.2aab25aebyeWYC`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : 'https://icms-image.slatic.net/images/ims-web/217b267f-b12e-4693-9d1d-7a77d2265b91.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ wiki, thumb, judul })
return hasil
}
module.exports = { AnyaPikaWiki}
