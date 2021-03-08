import React from 'react';
import renderer from 'react-test-renderer';
import ListPaymentMethods from '../index';

it("Mostrar uma lista com as formas de pagamento disponiveis", () => {
	const tree = renderer.create(
        <ListPaymentMethods
            bordered={true}
            itemLayout="horizontal"
            dataSource={[]}
            header={
                <span>{"FORMAS DE PAGAMENTO"}</span> 
            }
            renderItem={(method) => (
                <List.Item
                    actions={[
                        <CreditCardOutlined />
                    ]}
                >
                    <Radio>{method["title"]}</Radio>
                </List.Item>
            )}
        />
    ).toJSON();

	expect(tree).toMatchSnapshot();
});
