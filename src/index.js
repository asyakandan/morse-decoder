const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	const text = expr.split('**********');
	const res = [];

	text.map(el => {
		let word = '';

		for (let i = 0; i < el.length; i += 10) {
			let morseCode = '';

			for (let j = i; j < i + 10; j += 2) {
				if (el[j] != 0) {
					if (el[j + 1] == 0) {
						morseCode += '.';
					} else if (el[j + 1] == 1) {
						morseCode += '-';
					}
				}
			}

			word += MORSE_TABLE[morseCode];
		}

		res.push(word);
	});

	return res.join(' ');
}

module.exports = {
    decode
}