function positions (firstPlace, secondPlace, lastPlace){

    let posicoes = [firstPlace, secondPlace, lastPlace]
    if(posicoes[1] === "Daniel"){
        posicoes = [secondPlace, firstPlace, lastPlace]
    }
    else if (posicoes[2] === "Daniel"){
        posicoes = [firstPlace, lastPlace, secondPlace]}

        console.log(`1ª - Colocado é: ${posicoes[0]} 2ª - Colocado é: ${posicoes[1]} 3ª - Colocado é ${posicoes[2]} `)
     
        return
}


 
