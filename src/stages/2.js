const banco = require('../banco')

function execute(user, msg,nome) {

   //console.log(user)

    try {
        if (msg === '*') {
            banco.db[user].stage = 0
            return ["Pedido Cancelado com Sucesso"]

        }

        if (msg === '#') {
            banco.db[user].stage = 3
            return ["Digite o endereco por Favor:"]

        }


        let resumo = ' *RESUMO DO PEDIDO* \n'
        let total = 0
        banco.db[user].itens.forEach((value) => {
            //console.log(value)
            resumo += `${value.descricao} --------------- ${value.preco} \n`
            total += value.preco;

        })

        resumo += "-----------\n"
        resumo += `*Total R$ ${total}*`
       
        return [resumo, 'Para confirmar digite # ou para cancelar digite *']
    }
    catch (e){ console.log(`2.js (ERROR)===>${e}`)  }


}
exports.execute = execute