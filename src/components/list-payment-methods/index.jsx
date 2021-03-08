import React from 'react';
import styled from 'styled-components';
import { List, Radio } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';


const ListPaymentMethods = ({listMethods}) => {
    return(
        <>
            <StyledList
                bordered={true}
                itemLayout="horizontal"
                dataSource={listMethods}
                header={
                    <span className="text-list">{"FORMAS DE PAGAMENTO"}</span> 
                }
                renderItem={(method) => (
                    <List.Item
                        actions={[
                            <CreditCardOutlined />
                        ]}
                    >
                        <Radio value="radio">{method["title"]}</Radio>
                    </List.Item>
                )}
            />
        </>
    );
}

export default ListPaymentMethods;


const StyledList = styled(List)`
    background-color: white;
    border-radius: 4px;
`;
