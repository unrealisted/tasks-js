(function(){

    var
        concatenateStrings = function (value1, value2) {
                return value1 + value2;
            },

        getStringLength = function (value) {
                return value.length;
            },

        getStringFromTemplate = function (firstName, lastName) {
            return (`hello, ${firstName + lastName}.`);
        },

        extractNameFromTemplate = function (value) {
            return value.slice(7);
        },

        getFirstChar = function (value) {
            return value[0];
        },

        removeLeadingAndTrailingWhitespaces = function (value) {
            return value.trim();
        },

        repeatString = function (value, count) {
            return value.repeat(count);
        },

        removeFirstOccurrences = function (str, value) {
            return str.replace(value, '');
        },

        unbracketTag = function (str) {
            return str.replace( /[<>]/g, '' );
        },

        convertToUpperCase = function (str) {
            return str.toUpperCase();
        },

        extractEmails = function (str) {
            return str.split(';');
        },

        encodeToRot13 = function (str) {
            return str.replace(/[a-zA-Z]/g, function(c){
                return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
            });
        },

        isString = function (value) {
            if(typeof value === 'string' || value instanceof String){
                return true;
            }
            else{
                return false;
            }
        },

        array = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
                'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
                'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
                'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'],
        getCardId = function (value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    return i;
                }
            }
        };






    console.log(concatenateStrings('a', 'b'));
    console.log(getStringLength('abc'));
    console.log(getStringFromTemplate('java', 'script'));
    console.log(extractNameFromTemplate('hello, javascript'));
    console.log(getFirstChar('cba'));
    console.log(removeLeadingAndTrailingWhitespaces('  fde'));
    console.log(repeatString('a', 3));
    console.log(removeFirstOccurrences('To be or not to be', 'not'));
    console.log(unbracketTag('<div>'));
    console.log(convertToUpperCase('abcde'));
    console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'));
    console.log(encodeToRot13('hello'));
    console.log(isString('test'));
    console.log(getCardId('K♥'));

})();