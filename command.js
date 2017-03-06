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

	head: function(filename){
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
		process.stdout.write('\nprompt > ');
		});
	},

	tail: function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
		var counter = 0;
		var tailString = '';
		var dataString = data.toString();
		for(var i = dataString.length - 1; i >= 0; i--){
			if(dataString[i] === '\n') {
				counter++;
			}
			tailString = dataString[i] + tailString;
			if(counter >= 5){
				break;
			}
		}
		process.stdout.write(tailString);
		process.stdout.write('\nprompt > ');
		});
	},

	sort: function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
		var dataString = data.toString();
		process.stdout.write(dataString.split('\n').sort().join('\n'));
		process.stdout.write('\nprompt > ');
		});
	},

	wc: function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
		var dataString = data.toString();
		var lineArr = dataString.split('\n');
		process.stdout.write('count of lines: ' + lineArr.length);
		process.stdout.write('\nprompt > ');
		});
	},

	uniq: function(filename){
		fs.readFile(filename[1], (err, data) => {
  	if (err) throw err;
		var dataString = data.toString();
		var sortedArr = dataString.split('\n').sort();
		var filtered = sortedArr.filter(function(val, i, arr){
			return val !== arr[i + 1];
		});
		process.stdout.write(filtered.join('\n'));
		process.stdout.write('\nprompt > ');
		});
	},

}


