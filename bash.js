// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var dataArr = data.toString().trim().split(" ");
  var cmd = dataArr[0]
  var commands = require('./command');
   commands[cmd](dataArr);
  // if(cmd === 'pwd' || cmd === 'ls' || cmd === 'echo'){
  //   commands[cmd](dataArr);
  // }else if(cmd === 'date'){
  //   var today = new Date();
  //   var GMTstring = today.toGMTString();
  //   process.stdout.write(GMTstring);
  // } else{
  //   process.stdout.write('You typed: ' + cmd);
  // }

  process.stdout.write('\nprompt > ');

});
