const calculateRate = (score) => {
    // Rate máximo 5 estrelas.
    // Score máximo 400, para que cada estrela seja equivalente a 80 scores.
    const stars = [80, 160, 240, 330, 400];

    // Retornar o indice que sera o valor de cada Rate de acordo com o valor do score. 
    for(let i = 0; i < stars.length; i++){
        if(score < stars[i]) {
            return i;
        }
    }

    return 5;
}

export default calculateRate;