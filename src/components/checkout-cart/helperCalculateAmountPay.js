const calculateAmountToPay = (listProducts) => {
    const priceFixShipping = 10.00;
   
    // Posiçõa 0 ==> Subtotal.
    // Posiçõa 1 ==> Frete.
    const output = [0.0, 0.0]

    const pricesAllProduts = listProducts.map(product => product.price);
    
    // Somar valor o preço produto de todos os produtos e valor do frete. 
    pricesAllProduts.forEach((value) => {
        output[0] += value;
        output[1] += priceFixShipping;
    });

    // Se o total da compra for maior que 250.00, o frete é gratis.
    if(output[0] > 250.00){
        output[1] = 0;
    }

    return {subTotal: output[0], shipping: output[1], total: output[0] + output[1]}
}

export default calculateAmountToPay;