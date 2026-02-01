import React from "react";

function Produto({dados}) {

    return <div>
        <h1>{dados.nome}</h1>
        <h2>R$: {dados.preco}</h2>
        <img src={`${dados.fotos[0].src}`} alt={dados.descricao} />
        <p>{dados.descricao}</p>
        
    </div>
}

export default Produto