console.log("starting build");

const exec = require('child_process').exec;
const build = exec("handlebars templates/*.hbs -f templates.js && echo \"let Handlebars = require('handlebars');\" | cat - templates.js > temp && mv temp templates.js")


build.stdout.on('data', function(data) {
  console.log("stdout: " + data);
});

build.stderr.on('data', function(data) {
  console.log("stderr: " + data);
});

build.on('close', function(code) {
  console.log("child process exited with code " + code);
});
