import calculateAmountToPay from '../helperCalculateAmountPay';

describe('CALCULATE_PAYMENT', () => {
    it('Retorar um objeto contendo o valor, frete e total + frete', () => {
        const product = [{
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png"
        }];  
        const reducerResult = calculateAmountToPay(product); 
        expect(reducerResult).toStrictEqual({subTotal: 49.99, shipping: 10, total: 59.99});
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
        const reducerResult = calculateAmountToPay(product); 
        expect(reducerResult).toStrictEqual({subTotal: 299.98, shipping: 0, total: 299.98});
    });
});