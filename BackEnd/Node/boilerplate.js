const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/style.css`)
} catch (e) {
    console.log("error!!")
    console.log(e);
}
