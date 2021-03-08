import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSoppingCar } from '../../redux/actions';


const CheckoutShoppingCart = () => {
    const products = useSelector((state) => state.shoppingCar);
    const dispatch = useDispatch();
    let [subTotal, setSubTotal] = useState(0.0);
    let [shipping, setShipping] = useState(0);
    let [total, setTotal] = useState(0.0);
    

    // Regra de negócio para calcular e mostrar o pagamento.
    useEffect(() => {
        let totalPriorValue = 0.0;
        let totalShippingValue = 0;
        const priceFixShipping = 10.00;

        const calculateSubtotalAndShipping = (value) => {
            totalPriorValue += value;
            totalShippingValue += priceFixShipping;
        } 

        let pricesAllProduts = products.map(product => product.price);
        pricesAllProduts.forEach(calculateSubtotalAndShipping);
        setSubTotal(totalPriorValue);

        if(totalPriorValue > 250.00){
            totalShippingValue = 0;
        }

        setShipping(totalShippingValue);
        setTotal(totalPriorValue + totalShippingValue);
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
                            <span className="frete">{`FRETE R$ ${shipping}`}</span>
                            <span className="sub-total">{`SUBTOTAL R$ ${subTotal}`}</span>
                            <span className="total">{`TOTAL R$ ${total}`}</span>
                        </div>
                        <Button type="text">Finalizar pedido</Button>
                    </div>
                }
                renderItem={(game, indexGame) => (
                    <List.Item
                        actions={[
                            <span className="sub-total">{`R$ ${game["price"]}`}</span>,
                            <a key={game["id"]} onClick={() => dispatch(deleteSoppingCar(indexGame))}>Remover</a>
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
