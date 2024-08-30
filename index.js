const  prompt = require('prompt-sync');
const entrada = prompt();

const acessoPermitido = 2024;
var numero = entrada(`Digite a senha: `);
while (numero != acessoPermitido) {
  console.log(`Acesso negado`);
  numero = entrada(`Digite a senha novamente: `);
}
console.log(`Acesso permitido`);