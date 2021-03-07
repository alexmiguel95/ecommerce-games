import React from 'react';
import WhyBuyHere from '../../components/why-buy-here';
import TableProducts from '../../components/table-products';
import styled from 'styled-components';
import { useWindowSize } from "../../hooks";
import { StyledMain } from '../../styled';

const Home = () => {
    const [width] = useWindowSize();

    return(
        <> 
            <StyledMain>
                <StyledContainerProducts>
                    {
                        width > 1000 &&
                        <WhyBuyHere />
                    }
                    <StyledContainerListProducts>
                        <TableProducts />
                    </StyledContainerListProducts>
                </StyledContainerProducts>
            </StyledMain>
        </>
    );
}

export default Home;


const StyledContainerProducts = styled.div`
    @media(max-width: 576px){ 
        margin: 0;
    }

    margin: 45px;
`;

const StyledContainerListProducts = styled.div`
    margin: 35px 0 35px 0;
`;