import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios'
import parse from "html-react-parser"
import * as cheerio from 'cheerio'

import { Card } from '@/components/Card'
import Loading from '../../app/Loading'
import { Categorias } from '@/components/Categoria'
import scraping from '@/service/scraping'
import config from '@/service/config'

export const Content = props => {

    const pathname = usePathname()
    const router  = useRouter()
    const [data, setData] = useState()
    const { searchParams } = props

    // const { TAG_ID } = config

    useEffect(() => {

        axios.get(`/api/web${pathname}?s=${searchParams.s}`)
            .then(res => {

                const $ = cheerio.load(res.data)

                //remover menu
                $('div.main-menu').remove()
                $('div.mobile-header-components').remove()

                //botao de pesquisa
                $('li.search-bar > form').attr('action', '')
                $('form.search-form').attr('action', '')

                //remover span author
                $('span.meta-author-wrapper').remove()
                $('div.about-author').remove()

                // alterar links
                $('a[href*="https://produtoreview.com.br"]').each((i, a) =>
                    $(a).attr('href', $(a).attr('href').replace('https://produtoreview.com.br', '')))

                //Paginas no footer
                $('div[id=pages-2]').parent().remove()

                //share button
                $('div.share-buttons-sticky').remove()
                $('div.share-buttons-mobile').remove()
                $('div.mobile-share-buttons-spacer').remove()

                //copyright-text
                $('div.copyright-text > span').remove()
                $('div.copyright-text > a').remove()

                //alterar tag amazon
                $('a[href*="https://www.amazon.com.br/"]').each((i, a) =>
                    $(a).attr('href', $(a).attr('href').replace('produtoreview-20', 'fabriciodel0c-20')))

                const page = parse($.root().html())

                setData({ page })

                // setData({ product: scraping(res.data) })

            })
            .catch(err => console.log(err))
    }, [])

    return (
        !data
            ? <Loading />
            : data.page

        // <div id='content' className='site-content container' style={{ marginTop: '50px' }}>
        //     <div className='main-content tie-col-sm-12 tie-col-lg-8' role='main'>
        //         <div className='mag-box wide-post-box timeline-box'>
        //             <div className=''>
        //                 <div className='mag-box-container clearfix'>

        //                     {!data
        //                         ? <Loading />
        //                         : data.product.map(p => (
        //                             <div key={p.asin} className='tie-col-sm-6 tie-col-md-4'>
        //                                 <Card p={p} TAG_ID={TAG_ID} />
        //                             </div>
        //                         ))}

        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <aside className='sidebar tie-col-sm-12 tie-col-lg-4 normal-side is-sticky is-alreay-loaded' style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px' }}>
        //         <div className='theiaStickySidebar'>
        //             <Categorias />
        //         </div>
        //     </aside>
        // </div>
    )
}
