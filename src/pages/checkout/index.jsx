import React from 'react';
import Header from '../../components/header';
import styled from 'styled-components';
import { StyledMain } from '../../styled';
import { Row, Col } from 'antd'; 
import CheckoutShoppingCart from '../../components/checkout-cart';
import BannerInfoImportant from '../../components/banner-info-important';


const Checkout = () => {
    const listMessageBannerInfoImportant = ["O frete é grátis para compras acima de R$ 250,00."];

    return(
        <> 
            <Header />
            
            <StyledMain>
                <StyledDiv className="container-header">
                    <h1>Carrinho</h1>
                </StyledDiv>
                <Row gutter={30}>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16} span={30}> 
                        <CheckoutShoppingCart />
                        <BannerInfoImportant listMessage={listMessageBannerInfoImportant} />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}
                        style={{ 
                        backgroundColor: 'white', height: '100vh' }}>  
                    </Col>
                </Row>
            </StyledMain>
        </>
    );
}

export default Checkout;


const StyledDiv = styled.div`
    margin: 25px 0 25px 0;
   
    h1{
        margin: 0;
        text-align: left;
        color: white;
        font-size: 2rem;
    }
`; 