import { BsFolder, BsArrowRightSquareFill } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Categorias = props => {

    return (
        <div
            style={{
                borderRadius: '10px',
                border: 'none',
            }}
            id="tie-widget-categories-2"
            className="container-wrapper widget widget_categories tie-widget-categories"
        >
            <div className="widget-title the-global-title has-block-head-4">
                <div
                    className="the-subtitle"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        marginBottom: '15px',
                        background: '#0669ff',
                        color: 'white',
                        borderRadius: '5px',
                    }}
                >
                    <BsFolder />
                    Categorias
                </div>
            </div>
            <ul>
                <li className="cat-item cat-counter tie-cat-item-19"><a href="/?k=promocões">Promocões</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-19"><a href="/?k=esporte">Esporte</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-83"><a href="/?k=eletrodomésticos">Eletrodomésticos</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-2"><a href="/?k=eletrônicos">Eletrônicos</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-14"><a href="/?k=notebook">Notebook</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-160"><a href="/?k=suplementos">Suplementos</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-69"><a href="/?k=digital">Digital</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-107"><a href="/?k=infantil">Infantil</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-77"><a href="/?k=filmes">Filmes</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-78"><a href="/?k=livros e música">Livros e Música</a> <span><MdKeyboardArrowRight /></span></li>
                <li className="cat-item cat-counter tie-cat-item-10"><a href="/?k=tecnologia">Tecnologia</a> <span><MdKeyboardArrowRight /></span></li>
            </ul>
            <div className="clearfix">
            </div>
        </div >
    )
}