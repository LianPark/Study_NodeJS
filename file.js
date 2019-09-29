const fs = require('fs')

const fileName = "test.txt"
var data = '1234567890\n'

fs.writeFile(fileName, data, {encoding:'utf8',flag:'a+'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('The file has been saved!\n'+ data);
    }
});
