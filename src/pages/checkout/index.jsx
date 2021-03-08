import React from 'react';
import styled from 'styled-components';
import { StyledMain } from '../../styled';
import { Row, Col } from 'antd'; 
import CheckoutShoppingCart from '../../components/checkout-cart';
import BannerInfoImportant from '../../containers/banner-info-important-container';
import MethodsPaymentContainer from '../../containers/methods-payment-container';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';


const Checkout = () => {
    return(
        <> 
            <StyledMain>
                <StyledDiv>
                    <h1>Carrinho</h1>
                    <Link className="home" to="/"><ArrowLeftOutlined style={{paddingRight: "5px"}}/>Continuar comprando</Link>
                </StyledDiv>
                <Row gutter={20}>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16} > 
                        <CheckoutShoppingCart />
                        <BannerInfoImportant />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8} >
                        <MethodsPaymentContainer />
                    </Col>
                </Row>
            </StyledMain>
        </>
    );
}

export default Checkout;


const StyledDiv = styled.div`
    margin: 25px 0 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    h1{
        margin: 0;
        color: white;
        font-size: 2rem;
    }

    .home{
        background-color:#0199CC;
        color: white;
        border-color: #0199CC;
        border-radius: 4px;
        padding: 5px 15px 5px 15px;
    }
`; 


