'use client'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { Card } from '@/components/Card'
import Loading from '../../app/Loading'
import { Categorias } from '@/components/Categoria'
import scraping from '@/service/scraping'
import config from '@/service/config'

export default ({ searchParams }) => {

    const { TAG_ID } = config

    const [data, setData] = useState()

    // const searchParams = useSearchParams()
    const k = searchParams.k ?? 'promocões'
    // const k = searchParams.get('k') ?? 'promocões'
    const params = k === '' ? '?k=promocões' : `?k=${k}`

    const didLogRef = useRef(false);

    useEffect(() => {
        if (didLogRef.current === false) {
            didLogRef.current = true;

            axios.get(`/api/web${params}`)
                .then(res => {

                    setData({ product: scraping(res.data) })

                    //   const html = res.data
                    //   const dom = new DOMParser().parseFromString(html, 'text/html')
                    //   const body = dom.querySelector('body')

                    //   let produtoList = body.querySelectorAll('div[data-component-type="s-search-result"]')
                    //   produtoList = Array.from(produtoList)

                    //   const newData = []

                    //   produtoList.map(produto => {
                    //     const img = produto.querySelector('img')
                    //     const title = produto.querySelector('.a-text-normal span')
                    //     const price = produto.querySelector('.a-price > span')
                    //     const priceOriginal = produto.querySelector('.a-text-price > span')
                    //     const url = `https://www.amazon.com.br/dp/${produto.getAttribute("data-asin")}`

                    //     let star_rating
                    //     let num_ratings
                    //     Array.from(produto.querySelectorAll('span'))
                    //       .map(span => {
                    //         if ((span.ariaLabel || '').includes('estrelas')) {
                    //           const arr = span.parentElement.querySelectorAll(':scope > span')
                    //           //star_rating
                    //           star_rating = arr[0].ariaLabel.split(' ')[0].replace(',', '.')
                    //           //num_ratings
                    //           num_ratings = arr[1].ariaLabel
                    //         }
                    //       })

                    //     if (price) {
                    //       newData.push({
                    //         product_photo: img.src,
                    //         product_title: title.textContent,
                    //         product_price: price.textContent,
                    //         product_original_price: priceOriginal ? priceOriginal.textContent : null,
                    //         product_url: url,
                    //         product_star_rating: star_rating || 0,
                    //         product_num_ratings: num_ratings || 0,
                    //       })
                    //     }

                    //   })

                    // setData({
                    //   product: newData,
                    // })
                })
                .catch(err => console.log(err))
        }

    }, [])

    return (
        <div id='content' className='site-content container' style={{ marginTop: '50px' }}>
            <div className='main-content tie-col-sm-12 tie-col-lg-8' role='main'>
                <div className='mag-box wide-post-box timeline-box'>
                    <div className=''>
                        <div className='mag-box-container clearfix'>

                            {!data
                                ? <Loading />
                                : data.product.map(p => (
                                    <div key={p.asin} className='tie-col-sm-6 tie-col-md-4'>
                                        <Card p={p} TAG_ID={TAG_ID} />
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>

            <aside className='sidebar tie-col-sm-12 tie-col-lg-4 normal-side is-sticky is-alreay-loaded' style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px' }}>
                <div className='theiaStickySidebar'>
                    <Categorias />
                </div>
            </aside>
        </div>
    )
}
