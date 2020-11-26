const banco = require('../banco')

function execute(user, msg,nome) {
    banco.db[user].stage=0
    return [`Obrigado pela preferência.`,
    `Aguarde!, *_${nome}_* o seu pedido chegará em breve`,
    'Mais informações ligue para (41)3422-0099',]


}
exports.execute = execute