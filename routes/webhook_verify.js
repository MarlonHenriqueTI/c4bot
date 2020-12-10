const processPostback = require ('../processos / postback'); 
const processMessage = require ('../ processos / mensagens');
module.exports = function (app, giz) { 
  app.get ('/ webhook', function (req, res) { 
    if (req.query ['hub.verify_token'] === process.env.VERIFY_TOKEN) { 
       console .log ('webhook verificado'); 
       res.status (200) .send (req.query ['hub.challenge']); 
    } else { 
        console.error ('verificação falhou. Token incompatível.'); 
        res.sendStatus (403); 
     } 
  }); 
  
  app.post ('/ webhook', function (req, res) { 
    // verificar a assinatura da página.
     if (req.body.object === 'page') { 
       
       / * Iterar sobre cada entrada, pode haver várias entradas 
       se os retornos de chamada forem em lote. * /
       req.body.entry.forEach (function (entry) { 
       // Iterar sobre cada entrada de evento de
           mensagem.messaging.forEach (function (event) { 
          console.log (event); 
          if (event.postback) { 
             processPostback (event); 
          } else if (event.message) { 
             processMessage (event); 
          } 
      }); 
    }); 
    res.sendStatus (200); 
   } 
  }); 
}