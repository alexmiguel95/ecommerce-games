import productsList from '../productsList';

describe('GET_ALL_PRODUCTS', () => {
    it('Deve retornar uma lista com um produto', () => {
        const product = {
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png"
        };
        const reducerResult = productsList([product]); 
        expect(reducerResult).toStrictEqual([product]);
    });

    it('Deve retornar uma lista com dois produtos', () => {
        const product1 = {
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png"
        };
        const product2 = {
            "id": 312,
            "name": "Super Mario Odyssey",
            "price": 197.88,
            "score": 100,
            "image": "super-mario-odyssey.png"
        }   
        const reducerResult = productsList([product1, product2]); 
        expect(reducerResult).toStrictEqual([product1, product2]);
    });
});