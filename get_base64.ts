import fs from 'fs';
const stats = fs.statSync('./public/logo_real.jpg');
console.log('Real size:', stats.size);
