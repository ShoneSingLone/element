const fsextra = require('fs-extra');
const path = require('path');
const configs = require('D:/PrivateConfings/work/configs2');

let sourceDir = path.resolve(__dirname, '../examples/element-ui');
let deployStaticsDir = path.resolve(configs.deployStaticsDir);
// Sync:
if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
  console.log('__dirname:', __dirname, '\nfrom:', sourceDir, '\nto:', deployStaticsDir);
  fsextra.emptyDir(deployStaticsDir)
    .then(() => fsextra.copy(sourceDir, deployStaticsDir))
    .then(() => {
      console.log('copied! 1', deployStaticsDir);
    })
    .catch(err => {
      console.error(err);
    });
}
