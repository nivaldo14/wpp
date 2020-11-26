const cardapio = require("../cardapio")
const banco = require('../banco')

function execute(user,msg,nome){
    let menu = '*Cardapio* \n\n'

    Object.keys(cardapio.menu).forEach(value => {
        let element = cardapio.menu[value]
        menu += `${value} - ${element.descricao}          R$ ${element.preco} \n`;
    });
    banco.db[user].stage = 1;
   
    return [`Olá *_${nome}_* 👋👋 ${horario()}! Sou sua Atendente Virtual. Irei apresentar o cardapio, para fazer o pedido somente enviar o codigo do produto`, menu,]

}
function horario() {
    now = new Date
    if (now.getHours() >= 0 && now.getHours() < 5) { return "Bom dia" }
    else if (now.getHours() >= 5 && now.getHours() < 12) { return "Bom dia" }
    else if (now.getHours() >= 12 && now.getHours() < 18) { return "Boa Tarde" }
    else { return `Boa Noite` }
}
exports.execute = execute