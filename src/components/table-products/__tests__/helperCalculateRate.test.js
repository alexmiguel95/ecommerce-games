import helperCalculateRate from '../helperCalculateRate';

describe('CALCULATE_RATE', () => {
    it('Deve um inteiro de 1 a 5', () => {
        const score = 80; 
        const reducerResult = helperCalculateRate(score); 
        expect(reducerResult).toStrictEqual(1);
    });

    it('Deve um inteiro de 1 a 5', () => {
        const score = 400; 
        const reducerResult = helperCalculateRate(score); 
        expect(reducerResult).toStrictEqual(5);
    });
});