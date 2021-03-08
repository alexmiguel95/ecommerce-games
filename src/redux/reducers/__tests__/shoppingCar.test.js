import shoppingCar from '../shoppingCar';

describe('ADD_SHOPPING_CAR', () => {
    it('Deve retornar uma lista com um produto cadastrado', () => {
        const product = {
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png"
        };
        const action = {type: 'ADD_SHOPPING_CAR', game: product};
        const reducerResult = shoppingCar([], action); 
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
        const action = {type: 'ADD_SHOPPING_CAR', game: product2};
        const reducerResult = shoppingCar([product1], action); 
        expect(reducerResult).toStrictEqual([product1, product2]);
    });
});

describe('DELETE_SHOPPING_CAR', () => {
    it('Deve deletar um produto da lista', () => {
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
        const action = {type: 'DELETE_SHOPPING_CAR', game: 0};
        const reducerResult = shoppingCar([product1, product2], action); 
        expect(reducerResult).toStrictEqual([product2]);
    });
});