import fs from 'fs';
const b = fs.readFileSync('./public/logo.jpg', 'base64');
for (let i = 3320; i < b.length; i++) {
  console.log(i, b[i]);
}
