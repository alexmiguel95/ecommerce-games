import React from 'react';
import CardGame from '../../components/card-game';
import { List } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const CardGameRender = () => {
    const products = useSelector((state) => state.productsList);
      
    return (
        <StyledList
            grid={{ 
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 4
            }}
            dataSource={products}
            renderItem={game => (
                <List.Item>
                    <CardGame name={game.name} image={game.image}  price={game.price}/>
                </List.Item>
            )}
            style={{border: "1px solid red"}}
        />
    )
}

export default CardGameRender

const StyledList = styled(List)`
    .ant-row{
        row-gap: 1.4rem !important;
    }

    .ant-list-item{
        display: inline-block !important;
    }
`;
