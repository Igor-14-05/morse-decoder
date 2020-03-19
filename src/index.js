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
    // write your solution here
    var res1 = '';
    for (var i = 0; i < expr.length; i+=10)
    {
        var res2 = '';
        if (expr[i] == '*') 
        {
            res1+=' ';
            continue;
        }
        else 
        {
            for (var j = i; j < i+10; j+=2)
            {
                if(expr[j] == '1' && expr[j+1] == '0') res2+='.';
                else if(expr[j] == '1' && expr[j+1] == '1') res2+='-';
            }
        }
        res1+=MORSE_TABLE[res2];
    }
    return res1;
}

module.exports = {
    decode
}