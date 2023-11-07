import { Header } from '@/components/Header';
// import { Categorias } from '@/components/Categoria';
// import { Footer } from '@/components/Footer';

import '../styles/main.css';
import '../styles/widgets.css';
import '../styles/base.css';
import '../styles/helpers.css';
import '../styles/style.css';

export const metadata = {
  title: 'Brasil Ofertas',
  description: 'Sua Loja de Ofertas Favorita',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>

        <div className='background-overlay'>
          <div id='tie-container' className='site tie-container'>

            {/* <div id='tie-wrapper'> */}

            <Header />

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
