import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Badge, Popover, Button, List } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSoppingCar } from '../../redux/actions';
import { Link } from 'react-router-dom';
import addValueProductsInCart from './helperAddValueProductsInCart';
import { useWindowSize } from "../../hooks";


const ShoppingCard = () => {
    const products = useSelector((state) => state.shoppingCar);
    const [width] = useWindowSize();
    
    const dispatch = useDispatch();
    let [total, setTotal] = useState(0.0);
    
    const content = (
        <StyledList
            rowKey = "id"
            itemLayout={width < 768 ? "vertical" : "horizontal"}
            dataSource={products}
            footer={
                <div className="container-footer-list">
                    <span className="total">{`R$ ${total}`}</span>
                    <Link className="check-out" to="/checkout">Finalizar pedido</Link>
                </div>
            }
            renderItem={(game, indexGame) => (
                <List.Item
                    actions={[
                        <span className="price">{`R$ ${game["price"]}`}</span>,
                        <Link to="" onClick={() => dispatch(deleteSoppingCar(indexGame))}>Remover</Link>
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
    );

    useEffect(() => {
        setTotal(addValueProductsInCart(products));
    }, [products]);

    return(
        <>
            {
                products.length > 0 ?
                <StyledPopover placement="bottomRight" content={content}>
                    <StyledBuntton type="text">
                        <Badge count={products.length} style={{backgroundColor: "#339933", borderColor: "#339933"}}>
                            <ShoppingCartOutlined className="icon-cart-hover" />
                        </Badge>
                    </StyledBuntton>
                </StyledPopover>
                :
                <StyledBuntton type="text">
                    <Badge count={products.length} style={{backgroundColor: "#339933", borderColor: "#339933"}}>
                        <ShoppingCartOutlined />
                    </Badge>
                </StyledBuntton>
            }
        </>
    );
}

export default ShoppingCard;


const StyledPopover = styled(Popover)`
    button{
        background-color: black;
    }

`;

const StyledBuntton = styled(Button)`
    position: fixed;
    right: 25px;
    top: 30px;
    z-index: 1;

    .ant-badge{
        font-size: 35px;
        color: #339933;
    }

    .icon-cart-hover:hover {
        font-size: 40px;
    }
`;

const StyledList = styled(List)`
    .container-footer-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total{
        color:#339933;
    }

    .price{
        color:#0199CC;;
    }

    .check-out{
        background-color: #339933;
        color: white;
        border-color: #339933;
        border-radius: 5px;
        padding: 2px 5px 2px 5px;
    }

    .check-out:hover{
        background-color: #339933;
        color: white;
        border-color: #339933;
        padding: 3px 6px 2px 6px;
    }

    a{
        color: red;
    }
`;
