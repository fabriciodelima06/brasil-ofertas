import * as cheerio from 'cheerio'

export async function GET(request) {

    const url = new URL(request.url)
    let searchParams = url.searchParams.get("k")
    const searchQuery = searchParams.replace(/%20/gi, "+")

    // const uri = `https://www.amazon.com.br/s/ref=nb_sb_noss?__mk_pt_BR=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords=${searchParams}`
    const uri = `https://www.amazon.com.br/s?k=${searchQuery}`

    let response = await fetch(uri)
    let html = await response.text()

    let $ = cheerio.load(html)
    let products = $('div[data-asin]:not([data-asin=""])')

    let count = 0

    while (count < 20) {
        if ((products?.length || 0) > 0) break
        response = await fetch(uri)
        html = await response.text()
        $ = cheerio.load(html)
        products = $('div[data-asin]:not([data-asin=""])')
        count++
    }

    return new Response(html)

}