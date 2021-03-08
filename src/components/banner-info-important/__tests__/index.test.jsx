import React from 'react';
import renderer from 'react-test-renderer';
import BannerInfoImportant from '../index';

it("Mostrar uma lista de mensagens", () => {
	const tree = renderer.create(
        <BannerInfoImportant
            bordered
            dataSource={["msg"]}
            renderItem={()=> (
                <List.Item>
                    <CaretRightOutlined />
                    {message}
                </List.Item>
            )}
        />
    ).toJSON();

	expect(tree).toMatchSnapshot();
});
