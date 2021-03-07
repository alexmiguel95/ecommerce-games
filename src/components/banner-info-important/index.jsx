import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const BannerInfoImportant = ({listMessage}) => {
    return(
        <>
            <StyledList
                bordered
                dataSource={listMessage}
                renderItem={msg => (
                    <List.Item>
                        <CaretRightOutlined width={"20px"} />
                        {msg}
                    </List.Item>
                )}
            />
        </>
    );
}

export default BannerInfoImportant;

const StyledList = styled(List)`
    margin-top: 1rem;
    background-color: white;
    border-radius: 4px;
    font-size: 1rem;

    .container-footer-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .price{
        color:#0199CC;;
    }

    .container-frete-subtotal-total{
        text-align: left;
        font-size: 0.8rem;
    }

    .sub-total{
        display: block;
    }

    .frete{
        display: block;
    }

    .total{
        color: #339933;
        font-weight: bold;
        font-size: 1rem;
    }

    .text-list {
        font-weight: bold;
    }

    button{
        background-color: #339933;
        color: white;
        border-color: #339933;
    }

    button:hover{
        background-color: #339933;
        color: white;
        border-color: #339933;
    }

    a{
        color: red;
    }
`;
