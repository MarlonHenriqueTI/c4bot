const express = require ('express') 
const morgan = require ('morgan'); 
const bodyParser = require ('body-parser');
const app = express ();
// configuração do aplicativo
 app.set ('port', (process.env.PORT || 3000));
// configurar nosso aplicativo expresso
app.use (morgan ('dev')); // registra todas as solicitações no console. 
app.use (bodyParser.urlencoded ({extended: false})); 
app.use (bodyParser.json ());
// rotas do aplicativo
 require ('./ routes / webhook_verify') (app);
// aquecendo os motores !! setta !! vai !!!.
app.listen (app.get ('port'), function () { 
  const url = 'http: // localhost:' + app.set ('port'); 
  console.log ('Aplicativo em execução na porta:', app.get ('porta'));
});