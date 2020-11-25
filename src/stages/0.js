const cardapio = require("../cardapio")
const banco = require('../banco')

function execute(user,msg){
    let menu = 'Cardapio \n\n'

    Object.keys(cardapio.menu).forEach(value => {
        let element = cardapio.menu[value]
        menu += `${value} - ${element.descricao}          R$ ${element.preco} \n`;
    });
    banco.db[user].stage = 1;
    return ["Boas Vindas! sou sua Atendente Virtual. Irei apresentar o cardapio, para fazer o pedido somente enviar o codigo do produto", menu]

}
exports.execute = execute