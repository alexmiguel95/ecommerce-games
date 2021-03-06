import React from 'react';
import Header from '../../components/header'
import WhyBuyHere from '../../components/why-buy-here'
import styled from 'styled-components';

const Home = () => {
    return(
        <> 
            <Header />
            
            <StyledMain>
                <StyledContainerProducts>
                    <WhyBuyHere /> 
                </StyledContainerProducts>
            </StyledMain>
        </>
    );
}

export default Home;

const StyledMain = styled.main`
    max-width: 1200px;
    margin: 0 auto;

    
    border: 1px solid red;
`;

const StyledContainerProducts = styled.div`
    margin: 45px;


    border: 1px solid blue;
`;