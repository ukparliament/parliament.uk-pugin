/*
  Require node modules
*/
const argv     = require('minimist')(process.argv.slice(2)),
      chokidar = require('chokidar'),
      exec     = require('child_process').exec;

/*
  Setup constants and lets
*/
const directoriesToWatch = [];
let keyCount = 0;
let watcher;

/*
  Run through CLI arguments to find directories to watch and their respective tasks
*/
for (let i = 0; i < argv._.length; i++) {
  const split = argv._[i].split('=');
  directoriesToWatch.push(split[0]);
  keyCount++;
  /*
    Once looped, initalise watcher
  */
  if(keyCount === argv._.length) {
    initialise();
  }
}

function initialise() {
  /*
    Run chokidar but ignore dot files
  */
  watcher = chokidar.watch(directoriesToWatch, { ignored: /[\/\\]\./ });
}

function recompile(changedPath) {
  /*
    Recompile assets
  */
  for (let i = 0; i < argv._.length; i++) {
    const split = argv._[i].split('=');
    if(changedPath.startsWith(split[0])) {
      const task = `make ${split[1]}`;
      exec(task, (error, stdout, stderr) => {
        if(error === null && stdout !== null) {
          console.log(`Task ${task} successful!`);
        } else {
          console.log(`Task "${task}" failed:`);
          console.log(stderr, error, stdout);
        }
      });
    }
  }
}

/*
  Setup watcher
*/
watcher
  .on('ready', () => console.log('Watching files...'))
  .on('error', error => console.log(`Watcher error: ${error}`))
  .on('change', recompile)
  .on('unlink', recompile);
