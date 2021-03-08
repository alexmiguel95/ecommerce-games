import addValueProductsInCart from '../helperAddValueProductsInCart';

describe('ADD_VALUE_PRODUCT_IN_CART', () => {
    it('Deve retornar o preço de um produto', () => {
        const product = [{
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png"
        }];  
        const reducerResult = addValueProductsInCart(product); 
        expect(reducerResult).toStrictEqual(49.99);
    });

    it('Retorar um objeto contendo o valor, frete = 0 e total + frete', () => {
        const product = [
            {
                "id": 201,
                "name": "Call Of Duty Infinite Warfare",
                "price": 49.99,
                "score": 80,
                "image": "call-of-duty-infinite-warfare.png"
            },
            {
                "id": 99,
                "name": "Call Of Duty WWII",
                "price": 249.99,
                "score": 205,
                "image": "call-of-duty-wwii.png"
            },
        ];
        const reducerResult = addValueProductsInCart(product); 
        expect(reducerResult).toStrictEqual(299.98);
    });
});