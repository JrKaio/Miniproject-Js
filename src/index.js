const moment = require ('moment')

function sayMyName(name){
    console.log (name) // Retorna o nome
    console.log(moment().format('HH:mm:ss')) // Format - Define o formato, HH define a hora e mm define os minutos e ss os segundos
}
sayMyName('Kaio');

