import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSoppingCar } from '../../redux/actions';
import { Link } from 'react-router-dom';
import calculateAmountToPay from './helperCalculateAmountPay';


const CheckoutShoppingCart = () => {
    const products = useSelector((state) => state.shoppingCar);
    const dispatch = useDispatch();
    const [total, setTotal] = useState({subTotal: 0.0, shipping: 0.0, total: 0.0});
    
    // Aplicar a regra de negócio para calular o pagamento.
    useEffect(() => {
        setTotal(calculateAmountToPay(products));
    }, [products]);

    return(
        <>
            <StyledList
                bordered={true}
                itemLayout="horizontal"
                dataSource={products}
                header={
                    <span className="text-list">{"MEUS PRODUTOS"}</span> 
                }
                footer={
                    <div className="container-footer-list">
                        <div className="container-frete-subtotal-total">
                            <span className="frete">{`FRETE R$ ${total["shipping"]}`}</span>
                            <span className="sub-total">{`SUBTOTAL R$ ${total["subTotal"]}`}</span>
                            <span className="total">{`TOTAL R$ ${total["total"]}`}</span>
                        </div>
                        <Button type="text">Finalizar pedido</Button>
                    </div>
                }
                renderItem={(game, indexGame) => (
                    <List.Item
                        actions={[
                            <span className="sub-total">{`R$ ${game["price"]}`}</span>,
                            <Link to="/checkout" onClick={() => dispatch(deleteSoppingCar(indexGame))}>Remover</Link>
                        ]}
                    >
                        <img
                            alt={`Capa do jogo ${game["image"]}`}
                            src={require(`../../assets/${game["image"]}`).default}
                            style={{height: "80px"}}
                        />
                        <span>{game["name"]}</span>
                    </List.Item>
                )}
            />
        </>
    );
}

export default CheckoutShoppingCart;


const StyledList = styled(List)`
    background-color: white;
    border-radius: 4px;

    .container-footer-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .price{
        color:#0199CC;;
    }

    .container-frete-subtotal-total{
        text-align: left;
        font-size: 0.8rem;
    }

    .sub-total{
        display: block;
    }

    .frete{
        display: block;
    }

    .total{
        color: #339933;
        font-weight: bold;
        font-size: 1rem;
    }

    .text-list {
        font-weight: bold;
    }

    button{
        background-color: #339933;
        color: white;
        border-color: #339933;
    }

    button:hover{
        background-color: #339933;
        color: white;
        border-color: #339933;
    }

    a{
        color: red;
    }
`;
