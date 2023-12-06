
export async function GET(request) {

    const url = new URL(request.url)
    const pathname = url.pathname.replace('/api/web', '')
    const searchParams = url.searchParams
    const s = searchParams.get('s') === 'undefined' ? '' : `?s=${searchParams.get('s')}`

    const uri = `https://produtoreview.com.br${pathname}${s}`
    const response = await fetch(uri)
    const page = await response.text()

    return new Response(page)

}