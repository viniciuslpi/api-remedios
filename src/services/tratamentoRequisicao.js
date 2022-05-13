class Service {

    static retornarDuvida = (duvidas, texto, res) => {
        duvidas.forEach(duvidas => {
            duvidas.titulo == texto ?
            res.status(200).send(duvidas.descricao) :
            res.status(400).send({ message: `A pergunta não foi encontrada.` })                 
        })
    }
    
    static formataTexto = (texto) => {
        return texto
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "");
    }

}

export default Service;