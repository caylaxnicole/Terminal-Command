const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = (newFileName) => {
  fs.writefile(newFileName, '', (err) =>{
    if (err) throw err;
    console.log('saved file');
  });
};

module.exports.mkdir = (newDirName) => {
  fs.mkdir(newDirName, (err) =>{
    if (err) throw err;
    console.log('saved new dir');
  })
};
