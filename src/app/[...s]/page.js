'use client'

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from 'next/navigation'
import parse from 'html-react-parser'
import axios from "axios"

import Loading from "./Loading"

export default function S({ params }) {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/api/web',
      {
        params: { pathname, searchParams: searchParams.toString() }
      })
      .then(res => {
        const html = res.data

        const dom = new DOMParser().parseFromString(html, "text/html")

        const body = dom.querySelector('body')
        // const data = dom.querySelectorAll("div[data-component-type=s-search-result]")
        // const data2 = dom.querySelectorAll(".s-result-list")

        //div.user-panel.main input[name='login']

        // const image = data[0].querySelector('img').src
        // const title = data[0].querySelector('h2 > a')
        // title.href = ''
        // const title = data[0].querySelector('h2 > a > span').innerHTML

        // console.log(data2)

        setData({ card: parse(body.outerHTML) })
      })
      .catch(err => console.log(err))
  }, [])


  return (
    !data
      ? <Loading/>
      : data.card
  )
}
