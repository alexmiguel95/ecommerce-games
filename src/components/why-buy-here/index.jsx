import React from 'react';
import { Steps } from 'antd';
import { RedditOutlined, SafetyCertificateOutlined, SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const WhyBuyHere = () => {
    const { Step } = Steps;

    return(
        <StyledSteps>
            <Step status="finish" title="Todos os lançamentos" icon={<RedditOutlined />} />
            <Step status="finish" title="Compra 100% segura" icon={<SafetyCertificateOutlined />} />
            <Step status="finish" title="Grandes promoções" icon={<SmileOutlined />} />
        </StyledSteps>
    );
}

export default WhyBuyHere;

const StyledSteps = styled(Steps)`
    border-radius: 4px;
    background-color: #263241;
    padding: 15px;

    .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
        color: white;
        font-weight: bold;
        vertical-align: center;  
    }

    .ant-steps-item-custom > .ant-steps-item-container > .ant-steps-item-icon > .ant-steps-icon {
        color: #0199CC;
        font-weight: bold;
        font-size: 40px;
    }

    .ant-steps-item-title {
        line-height: 2.6;	
    }

    .ant-steps-item-title::after {
        top: 20px;
    }
`;