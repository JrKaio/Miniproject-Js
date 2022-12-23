const fs = require('fs');

fs.unlink('haha.js', err =>{if (err.code === 'ENOENT') {
    console.log('arquivo ou diretório não existe');
    return}})