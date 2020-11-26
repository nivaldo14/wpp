
const venom = require('venom-bot');
const banco = require("./banco")
const stages = require("./stages")


// let resp = stages.step[getStage('5541961658559@c.us')].obj.execute(
//   '5541961658559@c.us',
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
   console.log(message)
    if (banco.db[message.from]===undefined ) banco.db[message.from]={stage:0,itens:[]}
   // console.log( getStage(message.from) ,  banco.db[message.from])
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.pushname,

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
