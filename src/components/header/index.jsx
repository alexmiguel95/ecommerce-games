import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <StyledHeader>
            <div>
                <figure>
                    <img src={require('../../assets/logo.png').default} alt='Logo Challenge'/>
                </figure>
            </div>
            
            <div>
                <figure>
                    <img style={{height: "35px"}} src={require('../../assets/cart-icon.svg').default} alt='Logo Challenge' />
                </figure>
            </div>
        </StyledHeader>
    );
}

export default Header;


const StyledHeader = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 15px;
`;