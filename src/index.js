module.exports = function toReadable (number) {
	number = String(number);
	let result = '';
	const wordList = {		
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
	}
	if (number > 100) {
		result = result + wordList[number[0]] + ' hundred';
		number = '' + number[1] + number[2];
		if (number > 0) result += ' ';
		if (number == 0) number = 'a';
	}
	
	number = String(+number);	
	
	if (number <= 20) {
		result += wordList[number];
	} 
	else if (number <= 29) {
		result += 'twenty ' + wordList[number[1]];
	}
	else if (number == 30) result += 'thirty';
	
	else if (number > 30 && number <= 39) {
		result += 'thirty ' + wordList[number[1]];
	}
	else if (number == 40) result += 'forty';
	
	else if (number > 40 && number <= 49) {
		result += 'forty ' + wordList[number[1]];
	}
	else if (number == 50) result += 'fifty';
	
	else if (number > 50 && number <= 59) {
		result += 'fifty ' + wordList[number[1]];
	}
	else if (number == 60) result += 'sixty';
	
	else if (number > 60 && number <= 69) {
		result += 'sixty ' + wordList[number[1]];
	}
	else if (number == 70) result += 'seventy';
	
	else if (number > 70 && number <= 79) {
		result += 'seventy ' + wordList[number[1]];
	}
	else if (number == 80) result += 'eighty';
	
	else if (number > 80 && number <= 89) {
		result += 'eighty ' + wordList[number[1]];
	}
	else if (number == 90) result += 'ninety';
	
	else if (number > 90 && number <= 99) {
		result += 'ninety ' + wordList[number[1]];
	}
	else if (number == 100) {
		result += 'one hundred';
	}
	return result;
}
