const fs = require('fs');
const path = require('path');
const crypto = require('crypto-js');

const encryptedConfig = fs.readFileSync('../config.encrypted', 'utf8');

const decryptedBytes = crypto.AES.decrypt(encryptedConfig, 'key');
const decryptedConfig = decryptedBytes.toString(crypto.enc.Utf8);
const config = JSON.parse(decryptedConfig);

const outputDir = path.join(__dirname, '..');

fs.writeFileSync(path.join(outputDir, 'config.json'), JSON.stringify(config, null, 2));

console.log('Archivo desencriptado exitosamente en el directorio padre.');
