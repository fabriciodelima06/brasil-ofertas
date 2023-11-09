'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

import { Card } from '@/components/Card'
import Loading from './[...s]/Loading'
import { Categorias } from '@/components/Categoria'
import scraping from '@/service/scraping'

export default function Home() {

  const [data, setData] = useState()

  const searchParams = useSearchParams()
  const k = searchParams.get('k') ?? 'promocões'
  const params = k === '' ? '?k=promocões' : `?k=${k}`

  const didLogRef = useRef(false);

  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;

      axios.get(`/api/web${params}`)
        .then(res => setData({ product: scraping(res.data) }))
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
                    <Card p={p} />
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
