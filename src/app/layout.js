import { Header } from '@/components/Header';
// import { Categorias } from '@/components/Categoria';
// import { Footer } from '@/components/Footer';

import config from '@/service/config';

import '../styles/main.css';
import '../styles/widgets.css';
import '../styles/base.css';
import '../styles/helpers.css';
import '../styles/style.css';

const { TITLE } = config

export const metadata = {
  title: TITLE,
  description: 'Sua Loja de Ofertas Favorita',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <head>
        {/* <link rel="stylesheet" href="https://m.media-amazon.com/images/I/11EIQ5IGqaL._RC|01ZTHTZObnL.css,41GU8hNR+SL.css,31Q1jkp0osL.css,013z33uKh2L.css,017DsKjNQJL.css,0131vqwP5UL.css,41EWOOlBJ9L.css,11TIuySqr6L.css,01ElnPiDxWL.css,11fJbvhE5HL.css,01Dm5eKVxwL.css,01IdKcBuAdL.css,01y-XAlI+2L.css,21eFj-jYMjL.css,01oDR3IULNL.css,51nxm+VjGAL.css,01XPHJk60-L.css,01S0vRENeAL.css,21IbH+SoKSL.css,11MrAKjcAKL.css,21fecG8pUzL.css,11a5wZbuKrL.css,01CFUgsA-YL.css,31pHA2U5D9L.css,116t+WD27UL.css,11gKCCKQV+L.css,11061HxnEvL.css,11oHt2HYxnL.css,01j2JE3j7aL.css,11JQtnL-6eL.css,21KA2rMsZML.css,11jtXRmppwL.css,0114z6bAEoL.css,21uwtfqr5aL.css,11QyqG8yiqL.css,11K24eOJg4L.css,11F2+OBzLyL.css,01890+Vwk8L.css,01g+cOYAZgL.css,01cbS3UK11L.css,21F85am0yFL.css,01giMEP+djL.css_.css?AUIClients/AmazonUI#not-trident" />
        <link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/I/41Vqus7iTPL._RC|71VVS7ASylL.css,41y2IldnWpL.css,11tAtPcKxJL.css,31-P1-9TebL.css,31YZpDCYJPL.css,21pkK7OQMnL.css,41yQj5y2obL.css,110Nj+wUGYL.css,31OvHRW+XiL.css,01R53xsjpjL.css,11EKggV-DlL.css,415g7iDx4VL.css,01YWmXMYw8L.css_.css?AUIClients/NavDesktopUberAsset#desktop.language-pt"></link>
        <link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/I/01mI9NDJJTL._RC|01Hw8JIiKbL.css,11AQMRD3rsL.css,61pdzbsoZUL.css,01aTTaL5f8L.css,010ntAIO6fL.css,016yj1+yYYL.css,013Xm+zjr6L.css,41LbGfvspkL.css,01AuLu1p0SL.css,01+A2nZ3DKL.css,11IaasccbKL.css,01m4HdUj51L.css,11ABzUvcTsL.css,31PkQnLN0OL.css,01e7DqahglL.css,01h5jb0krML.css,212Z-Jsnp3L.css_.css?AUIClients/SearchAssets"></link>
        <link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/I/21Yr8ohNIxL._RC|01TrKJuj6JL.css,0171-O+nBwL.css,21-1CDsoZDL.css,01+6LDwsu8L.css,01ixfc-7StL.css,21BvqGuT9YL.css,11oqoK-MptL.css,01+neHskhqL.css,01U2pA95KSL.css,01Luz-sfd0L.css,01CXpQgAC8L.css,01LfrrxE-KL.css,31wUat9O8SL.css,31gMGQBDl3L.css,01mP5ZKi0aL.css,11+CteHMjmL.css,01OpjCq+SSL.css,01mEWw4285L.css,41P8IIDm5cL.css,11VKiAMd89L.css,21K0oo63ZeL.css,11E6-iRIJOL.css,01K0fSFz6eL.css,014eilLW+IL.css,01MU0Cb7yFL.css,01jaS0ue2bL.css,01mLnxJuOBL.css_.css?AUIClients/SearchPartnerAssets"></link>
        <link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/I/31TC1RsikLL.css?AUIClients/DetailPageAllOffersDisplayAssets"></link> */}
      </head>

      <body>

        <div className='background-overlay'>
          <div id='tie-container' className='site tie-container'>

            {/* <div id='tie-wrapper'> */}

            <Header TITLE={TITLE} />

            {children}

            {/* <div id='content' className='site-content container' style={{ marginTop: '50px' }}>
              <div className='main-content tie-col-sm-12 tie-col-lg-8' role='main'>
                <div className='mag-box wide-post-box timeline-box'>
                  <div className=''>
                    <div className='mag-box-container clearfix'>
                      {children}
                    </div>
                  </div>
                </div>
              </div>

              <aside className='sidebar tie-col-sm-12 tie-col-lg-4 normal-side is-sticky is-alreay-loaded' style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px' }}>
                <div className='theiaStickySidebar'>
                  <Categorias />
                </div>
              </aside>
            </div> */}

            {/* <Footer /> */}
          </div>
        </div>

      </body>
    </html>
  )
}
