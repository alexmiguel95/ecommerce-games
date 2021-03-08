const addValueProductsInCart = (listProducts) => {
    let priorValue = 0.0;

    const getAllPrices = listProducts.map(product => (product.price));

    getAllPrices.forEach((price) => {
        priorValue += price;
    });

    return priorValue
}

export default addValueProductsInCart;