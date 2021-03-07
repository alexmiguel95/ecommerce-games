import React from 'react';
import Header from '../../components/header';
import WhyBuyHere from '../../components/why-buy-here';
import CardGameRender from '../../components/card-game-render';
import styled from 'styled-components';
import { useWindowSize } from "../../hooks";
import { StyledMain } from '../../styled';


const Home = () => {
    const [width] = useWindowSize();

    return(
        <> 
            <Header />
            
            <StyledMain>
                <StyledContainerProducts>
                    {
                        width > 1000 &&
                        <WhyBuyHere />
                    }
            
                    <StyledContainerListProducts>
                        <CardGameRender />
                    </StyledContainerListProducts>
                </StyledContainerProducts>
            </StyledMain>
        </>
    );
}

export default Home;


const StyledContainerProducts = styled.div`
    margin: 45px;
`;

const StyledContainerListProducts = styled.div`
    margin: 35px 0 35px 0;
`;