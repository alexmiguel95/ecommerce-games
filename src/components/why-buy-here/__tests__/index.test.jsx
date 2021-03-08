import React from 'react';
import renderer from 'react-test-renderer';
import WhyBuyHere from '../index';
import { Steps } from 'antd';

it("Mostrar um banner de destaque", () => {
    const { Step } = Steps;
    
	const tree = renderer.create(
        <WhyBuyHere>
            <Step />
            <Step />
            <Step />
        </WhyBuyHere>
    ).toJSON();

	expect(tree).toMatchSnapshot();
});
