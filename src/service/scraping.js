import * as cheerio from 'cheerio'
import parse from "html-react-parser"

const scraping = html => {

    // const $ = cheerio.load(html)

    // const links = $('a[href*="https://produtoreview.com.br"]')
    // $('a[href*="https://produtoreview.com.br"]').each((i, a) => $(a).replaceWith($(a).text('http://localhost:3001/')))
    // $('a[href*="https://produtoreview.com.br"]').each((i, a) => 
    //         $(a).attr('href', $(a).attr('href').replace('https://produtoreview.com.br', 'http://localhost:3001')))

    // const page = parse($.root().html())

    //parseHTML($.root().html());


    // console.log(router)

    return html
}

// const scraping = html => {

//     const $ = cheerio.load(html)
//     const products = $('div[data-asin]:not([data-asin=""])')

//     const data = []

//     for (const product of products) {
//         const element = $(product)

//         const img = $(element.find('img'))
//         const title = $(element.find('.a-text-normal[href]'))
//         const price = $(element.find('.a-price > span'))
//         const priceOriginal = $(element.find('.a-text-price > span'))
//         const url = `https://www.amazon.com.br/dp/${element.attr('data-asin')}`
//         const star_rating = $(element.find('span[aria-label*=estrelas]'))
//         const num_ratings = star_rating.parent().children().last().text().trim()

//         if (price && price.first().text().trim() !== '') {
//             data.push({
//                 product_photo: img.attr('src'),
//                 product_title: title.first().text().trim(),
//                 product_price_number: Number(price.first().text().trim().substring(3).replaceAll('.', '').replaceAll(',', '.')),
//                 product_price: price.first().text().trim(),
//                 product_original_price_number: Number(priceOriginal.first().text().trim().substring(3).replaceAll('.', '').replaceAll(',', '.')),
//                 product_original_price: priceOriginal.first().text().trim(),
//                 product_url: url,
//                 product_star_rating: (star_rating.attr('aria-label') || '').split(' ')[0].replace(',', '.') || 0,
//                 product_num_ratings: num_ratings || 0,
//             })
//         }
//     }

//     // data.sort((a, b) => a.product_price_number - b.product_price_number)

//     return data
// }

export default scraping