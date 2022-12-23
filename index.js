const moment = require ('moment')

function MeuNome(name){
    console.log (name) // Retorna o nome
    console.log(moment().format('HH:mm:ss')) // Format - Define o formato, HH define a hora e mm define os minutos
}
MeuNome('Kaio');
