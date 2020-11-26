const banco = require('../banco')
const stages = require('../stages')



function execute(user, msg,nome) {

   
    if (msg === '*') {
        banco.db[user].stage = 0
        return ["Pedido Cancelado com Sucesso"]

    }

    if (msg === '#') {
        banco.db[user].stage = 4
        
        return stages.step[4].obj.execute(user,"", nome)

    }
    return [`Conrima endereco de entrega:\n ${msg} `,
        "```Digite # para continuar ou * para Cancelar ```"]

}
exports.execute = execute