
const venom = require('venom-bot');
const banco = require("./banco")
const stages = require("./stages")


// let resp = stages.step[getStage('554196165855@c.us')].obj.execute(
//   '554196165855@c.us',
//   'testebody',
// )

// for (let index = 0; index < resp.length; index++) {
//   const element = resp[index];
//   console.log(element);
// }

// banco.db['456787877787']={stage:0,itens:[]} // adiciona usuario no objeto banco.db
// console.log(banco.db[''456787877787''])  // se nao tiver .. retorna undefined
  




venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

//554196165855@c.us
function start(client) {
  
  client.onMessage((message) => {
      //verificar se tem o usuario no objeto banco
    banco.db[message.from]===undefined ?  banco.db[message.from]={stage:0,itens:[]} : message.from
    console.log(banco.db)
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
    )
   
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from,element);
    }
  });
}



function getStage(user) {
  return banco.db[user].stage;
}
/*  console.log(stages.step[getStage("user1")].obj.execute())
  console.log(stages.step[getStage("user2")].obj.execute())*/
