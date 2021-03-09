import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../index';

it("Footer da pagina", () => {
	const tree = renderer.create(
        <Footer>
            <div>
                <div>
                    <figure>
                        <img />
                    </figure>
                    <span>&copy; text <a>text</a></span>
                </div>
            </div>
        </Footer>
    ).toJSON();

	expect(tree).toMatchSnapshot();
});
