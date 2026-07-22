const fs = require('fs');
if (process.stdin.isTTY) {
	const readline = require('readline');
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	rl.question('Enter a number: ', (answer) => {
		const num = parseInt(answer, 10);
		console.log('Number is ' + (Number.isNaN(num) ? answer : num));
		rl.close();
	});
} else {
	const data = fs.readFileSync(0, 'utf8').trim();
	const num = parseInt(data, 10);
	console.log('Number is ' + (Number.isNaN(num) ? data : num));
}
