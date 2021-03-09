import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from '../../styled';

const FooterDefault = () => {
    return(
        <StyledContainerFooter>
            <StyledContainer>
                <StyledFooter>
                    <figure>
                        <img src={require('../../assets/logo.png').default} alt='Logo Challenge'/>
                    </figure>
                    <span>&copy; 2021 - Created by <a href="https://www.linkedin.com/in/alexmiguel95/" target="_blank" rel="noopener noreferrer">Alex Miguel</a></span>
                </StyledFooter>
            </StyledContainer>
        </StyledContainerFooter>
    );
}

export default FooterDefault;


const StyledFooter = styled.header`
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    height: 100px;

    figure{
        margin: 0;
        text-align: left;
    }

    img{
        width: 55%;
    }
`;

const StyledContainerFooter = styled.footer`
    background-color: black;
`;