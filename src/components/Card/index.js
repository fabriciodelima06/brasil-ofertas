import styled from 'styled-components';
import { CgExternal } from 'react-icons/cg';
import ReactStarRatings from 'react-star-ratings';

const Container = styled.div`
  height: 365px;
  margin-bottom: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
  overflow: hidden;
  // border: 1px solid #d1d1d1;
  border-radius: 10px;
  cursor: pointer;
  transition-property: box-shadow;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(.215,.61,.355,1);

  &:hover {
    box-shadow: 0 4px 12px rgba(33,36,41,.141);
  }
`

const BadgeDeconto = styled.div`
  height: 26px;
  width: 87px;
  background-color: #E67A00;
  position: absolute;
  top: 0;
  left: 14px;
  border-radius: 10px 0 0 0;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 18px;
  display: flex;
  justify-content: center;
`

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Title = styled.h2`
  display: -webkit-box;
  font-size: 14px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Value = styled.p`
  font-weight: 700;
  font-size: 20px;
`

const ValueOriginal = styled.p`
  font-size: 15px;
  text-decoration: line-through;
  color: #606060;
`

const Rating = styled.div`
  color: #666;
`

export const Card = ({ p, TAG_ID }) => {

  const isDesconto = p.product_original_price_number > p.product_price_number
  const percent = isDesconto
    ? p.product_price_number / p.product_original_price_number * 100
    : 0

  return (
    <a target='_blank' href={`${p.product_url}?&_encoding=UTF8&tag=${TAG_ID || 'fabriciodel0c-20'}`} rel="noreferrer" >
      <Container>

        {isDesconto &&
          <BadgeDeconto>
            <span>{(100 - percent).toFixed(0)}% OFF</span>
          </BadgeDeconto>}

        <Img>
          <img src={p.product_photo} alt={p.product_title} />
        </Img>

        <Produto>
          <Description>
            <Title title={p.product_title}>{p.product_title}</Title>
            <div>
              {isDesconto &&
                <ValueOriginal>
                  {p.product_original_price}
                </ValueOriginal>}
              <Value>{p.product_price}</Value>
            </div>
          </Description>

          {/* {p.product_star_rating && */}
          <Rating>
            <ReactStarRatings
              rating={Number(p.product_star_rating)}
              starRatedColor="#F1C512"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="2px"
            />
            <h6>{`${p.product_num_ratings} Avaliações`}</h6>
          </Rating>
          {/* } */}
        </Produto>

        <span>Ir à loja <CgExternal /></span>

      </Container >
    </a>
  )
}