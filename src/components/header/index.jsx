import React from 'react';
import styled from 'styled-components';
import ShoppingCarContainer from '../../containers/shopping-car-container';


const Header = () => {
    return(
        <StyledHeader>
            <figure>
                <img src={require('../../assets/logo.png').default} alt='Logo Challenge'/>
            </figure>

            <ShoppingCarContainer />
        </StyledHeader>
    );
}

export default Header;


const StyledHeader = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px 0 15px;
`;