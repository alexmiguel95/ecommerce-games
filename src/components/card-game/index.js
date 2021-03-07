import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import imgCart from '../../assets/cart-icon.svg';
import imgAddCart from '../../assets/arrow-down-icon.svg';
import { addSoppingCar } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const CardGame = ({id, name, image, price}) => {
    const dispatch = useDispatch();
    const game = {id, name, image, price}
    const { Meta } = Card;

    return(
        <StyledCard
            cover={
                <img
                    alt={`Imagem do jogo ${game.image}`}
                    src={require(`../../assets/${game.image}`).default}
                />
            }
        >
            <Meta
                title={name}
                description={`R$ ${game.price}`}
            />
            <StyledButtonBuy onClick={() => dispatch(addSoppingCar(game))}>{" "}</StyledButtonBuy>
      </StyledCard>
    );
}

export default CardGame;

const StyledCard = styled(Card)`
    width: 205px;

    img{
        height: 110px;
    }
`;

const StyledButtonBuy = styled(Button)`
    color: black;
    border-color: #0199CC;
    border-radius: 4px;
    width: 140px;
    background: #0199CC url(${imgCart}) no-repeat center;
    background-size: 30px 30px;
    font-weight: bold;
    margin-top: 10px;

    &:hover{
        background: #0199CC url(${imgCart}) no-repeat center;
        background-size: 30px 30px;
        color: white;
        border-color: #0199CC;
    }

    &:focus{
        background: #339933 url(${imgAddCart}) no-repeat center;
        background-size: 30px 30px;
        color: white;
        border-color: #339933;
    }
`;