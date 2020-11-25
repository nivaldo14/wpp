const banco = require('../banco')

function execute(user, msg) {

    if(msg==='*')
    {
        banco.user[user].stage=0
        return ["Pedido Cancelado com Sucesso"]

    }

    if(msg==='#')
    {
        banco.user[user].stage=3
        return ["Digie o endereco por Favor:"]

    }
    
        

    let resumo = ' RESUMO '
    let total = 0
    banco.db[user].itens.forEach((value) => {
        console.log(value)
        resumo += `${value.descricao} --------------- ${value.preco} \n`
        total += value.preco;

    })

    resumo += "-----------\n"
    resumo += `Total R$ ${total}`

    return [resumo,'Para confirmar digite # ou para cancelar digite *']


}
exports.execute = execute