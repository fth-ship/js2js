var OP = require("OptionParser");

var optionParser = new OP.OptionParser();

var VERBOSE = false;

optionParser.addOption('o', 'output', 'Output location', 'input').argument("INPUT");
optionParser.addOption('i', 'input', 'Input location', 'output').argument("OUTPUT");
optionParser.addOption('v', 'verbose', 'Toggle verbose output')
			.action(function() {
				VERBOSE = true;
});
optionParser.addOption('h', 'help', 'Help')
			.action(function() { 
				printHelp(); 
				process.exit(1);
});

printGreeting();

optionParser.parse();

var options = optionParser.getopt();

if(!options.i || !options.o) {
	console.log("Please specify input and output paramenters.")
	printHelp();
	process.exit(1);
}

function printHelp() {
	console.log("Parameters usage:");
	console.log(optionParser.help());
}

function printGreeting() {
	console.log("Welcome to js2js compiler.");
}