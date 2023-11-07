import { BsSearch } from 'react-icons/bs';

export const Header = props => {

    return (
        <header id='theme-header' className='theme-header header-layout-1 main-nav-light main-nav-default-light main-nav-below no-stream-item top-nav-active top-nav-light top-nav-default-light top-nav-above has-shadow has-normal-width-logo mobile-header-default'>

            <div className='main-nav-wrapper'>
                <nav id='main-nav' className='main-nav header-nav default-behavior-mode fixed-not-bottom fixed fixed-top' aria-label='Navegação Primária'>
                    <div className='container'>

                        <div className='main-menu-wrapper'>

                            <div style={{
                                display: 'flex',
                                flex: 1,
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingBottom: '15px',
                            }}>
                                <div 
                                    id='logo' 
                                    className='image-logo'
                                    style={{
                                        marginBottom: '0 !important',
                                    }}
                                >
                                    <a title='Brasil Ofertas' href='/'>
                                        <h1>Brasil<span style={{ color: '#0669ff' }}>Ofertas</span></h1>
                                        <h1 className='h1-off'>Brasil Ofertas</h1>
                                    </a>
                                </div>

                                <div style={{
                                    flex: 1,
                                    margin: '15px 0 0 15px',
                                }}>
                                    <form method='get' style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <input 
                                            style={{
                                                width: '100%',
                                                minWidth: '230px',
                                                maxWidth: '500px'
                                            }}
                                            id='search-input' 
                                            type='text' 
                                            name='k' 
                                            title='Procurar por' 
                                            placeholder='Procurar por'
                                        />
                                        <button id='search-submit' type='submit'>
                                            <span aria-hidden='true'><BsSearch /></span>
                                            <span className='screen-reader-text'>Procurar por</span>
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </nav>
            </div>

        </header >
    )
}

