
export async function GET(req) {

    const url = new URL(req.url)
    let searchParams = url.searchParams.get("k")
    searchParams = searchParams ? `?k=${searchParams}` : ''
    
    const uri = `https://www.amazon.com.br/s${searchParams}`

    const response = await fetch(uri)
    const html = await response.text()

    return new Response(html);
}