var stages = {
    0: {
      desc:"Boas Vindas! Sou sua Atendente Virtual",
      obj: require("./stages/0"),
    },
    1: {
      desc:"Vendas",
      obj: require("./stages/1"),
    },
    2:{
      desc:"Resumo",
      obj: require("./stages/2"),
    },
    3:{
      desc:"Endereço",
      obj: require("./stages/3"),
    },
    4:{
      desc:"Encerramento",
      obj: require("./stages/4"),
    },
}

exports.step = stages;