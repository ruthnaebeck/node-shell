var fs = require('fs');

module.exports = {
	pwd: function(){
		process.stdout.write(process.cwd());
		process.stdout.write('\nprompt > ');
	},

	ls : function(){
		fs.readdir('.', function(err, files) {
  	if (err) throw err;
  	files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  	})
  	process.stdout.write("prompt > ");
		});
	},

	echo : function(arg){
		process.stdout.write(arg.slice(1).join(" "));
	},

	cat : function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
  	process.stdout.write(data);
		});
	},

	head : function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
		var counter = 0;
		var headString = '';
		var dataString = data.toString();
		for(var i = 0; i < dataString.length; i++){
			if(dataString[i]=== '\n') {
				counter++;
			}
			headString += dataString[i];
			if(counter >= 5){
				break;
			}
		}
		process.stdout.write(headString);
		});
	},
}


