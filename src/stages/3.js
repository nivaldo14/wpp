const banco = require('../banco')
const stages = require('../stages')



function execute(user, msg) {

    if (msg === '*') {
        banco.user[user].stage = 0
        return ["Pedido Cancelado com Sucesso"]

    }

    if (msg === '#') {
        banco.user[user].stage = 4
        
        return stages.step[4].obj.execute(user,"")

    }
    return [`Conrima endereco de entrega:${msg} \n`,
        "'''Digite # para continuar ou * para Cancelar '''"]

}
exports.execute = execute