const cardapio = require('../cardapio')
const banco = require('../banco')

function execute(user, msg,nome) {

    if (msg === "*") {

        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }


    if (msg === "#") {

        banco.db[user].stage = 2;
        return ["Estamos fechando seu pedido, OK?"];
    }
    if (!cardapio.menu[msg]) {
        return ["Código Inválido, digite corretamente",
            "```Digite # para Finalizar ou * para Cancelar ```"
        ];
    }

    banco.db[user].itens.push(cardapio.menu[msg])
    return [`Item (${cardapio.menu[msg].descricao}) Adicionado com Sucesso`,
        "```Digite # para Finalizar ou * para Cancelar ```"
    ];

}

exports.execute = execute;