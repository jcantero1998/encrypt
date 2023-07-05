const fs = require('fs');
const crypto = require('crypto-js');

async function encrypt() {
    let config = fs.readFileSync('../config.json', 'utf8');
    let encryptedConfig = crypto.AES.encrypt(config, 'key').toString();
    await fs.writeFileSync('../config.encrypted', encryptedConfig, 'utf8');

    console.log('Archivo encriptado generado exitosamente en el directorio padre.');
}

encrypt();