const fsextra = require('fs-extra');
const path = require('path');

let sourceDir = path.resolve(__dirname, '../examples/element-ui');
let deployStaticsDir = path.resolve(__dirname, '../..', 'ShoneSingLone.github.io/element-ui');
console.log('##############\n__dirname:', __dirname, '\nfrom:', sourceDir, '\nto:', deployStaticsDir);
fsextra
  .emptyDir(deployStaticsDir)
  .then(() => fsextra.copy(sourceDir, deployStaticsDir))
  .then(() => console.log('move success', deployStaticsDir, '\n###################'))
  .catch(err => console.error(err));
