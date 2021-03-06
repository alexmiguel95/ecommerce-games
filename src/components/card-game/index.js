import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import imgCart from '../../assets/cart-icon.svg';
import imgAddCart from '../../assets/arrow-down-icon.svg';


const CardGame = ({name, image, price}) => {
    const { Meta } = Card;

    return(
        <StyledCard
            bordered={false}
            bodyStyle={{color: "white"}}
            cover={
                <img
                    alt="example"
                    src={require(`../../assets/${image}`).default}
                    style={{height: "98px"}}
                />
            }
            actions={[<StyledButtonBuy>{" "}</StyledButtonBuy>]}
        >
            <Meta
                title={name}
                description={`R$ ${price}`}
            />
      </StyledCard>
    );
}

export default CardGame;

const StyledCard = styled(Card)`
    width: 190;
    height: 220;

    img{
        width: 190px;
    }
`;

const StyledButtonBuy = styled(Button)`
    color: black;
    border: 1px solid #0199CC;
    border-radius: 4px;
    width: 140px;
    background: #0199CC url(${imgCart}) no-repeat center;
    background-size: 30px 30px;
    font-weight: bold;

    &:focus{
        background: #339933 url(${imgAddCart}) no-repeat center;
        background-size: 30px 30px;
        color: white;
        border-color: #339933;
    }
`;