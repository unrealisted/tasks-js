(function(){

    var getFizzBuzz = function (num) {
        if(num % 3 == 0 && num % 5 == 0){
            return 'fizzbuzz';
        }
        else if(num % 5 == 0){
            return 'buzz';
        }
        else if(num % 3 == 0){
            return 'fizz';
        }
        else{
            return num;
        }
    };

    var getFactorial = function fac(n) {
        return n<2 ? 1 : n*fac(n-1)
    };

    var getSumBetweenNumbers = function (min, max) {
        return ((max-min)+1) * (min + max) / 2;
    };

    var isTriangle = function (a,b,c) {
        if(a + b > c && a + c > b && b + c > a){
            return true;
        }
        else{
            return false;
        }
    };

    var isInsideCircle = function (circle, point) {
        if(Math.pow(circle.center.x - point.x, 2) + Math.pow(circle.center.y - point.y, 2) >= Math.pow(circle.radius, 2)){
            return false;
        }
        else{
            return true;
        }
    };

    var findFirstSingleChar = function (str) {
        var chars = str.split('');
        for (var i = 0; i < str.length; i++) {
            if (chars.filter(function(j) {return j == str.charAt(i)}).length == 1){
                return str.charAt(i);
            }
        }
    };

    var getIntervalString = function(a, b, isStartIncluded, isEndIncluded){
        var array = [a, b];
        if(a > b){
           array.reverse();
            return doit();
        }
        else{
            return doit();
        }
        function doit(){
        if(isStartIncluded, isEndIncluded){
            return '['+array[0]+','+array[1]+']'
        }
        else if(!isStartIncluded && isEndIncluded){
            return '('+array[0]+','+array[1]+']'
        }
        else if(isStartIncluded && !isEndIncluded){
            return '['+array[0]+','+array[1]+')'
        }
        else if(!isStartIncluded && !isEndIncluded){
            return '('+array[0]+','+array[1]+')'
        }
        }
    };

    var reverseString = function (str) {
        return str.split("").reverse().join("");
    };

    var reverseInteger = function (a) {
        return Number(a.toString().split("").reverse().join(""));

    };

    var isCreditCardNumber = function (value) {
        var nCheck = 0;
        var nDigit = 0;
        var cDigit;
        var bEven = false;
        var n;
        for (n = value.length - 1; n >= 0; n--) {
            cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    };

    var getDigitalRoot = function (num) {
        var array = num.toString().split('');
        var sum = 0;
        var i;
        function doit(){
        for(i = array.length; i >= 0; i--){
            sum += i;
        }
            return sum;
        }
        doit();
        if(sum > 9){
            array = sum.toString().split('');
            sum = 0;
            return doit();
        }
    };

    var isBalancedBrackets = function(str){
        var bracket = {
                "]": "[",
                "}": "{",
                ")": "("
            };
        var openBrackets = [];
        var isClean = true;
        var i = 0;
        var len = str.length;

        for(; isClean && i<len; i++ ){
            if( bracket[ str[ i ] ] ){
                isClean = ( openBrackets.pop() === bracket[ str[ i ] ] );
            }else{
                openBrackets.push( str[i] );
            }
        }
        return isClean && !openBrackets.length;
    };

    var toNaryString = function (num, n) {
        return num.toString(n)
    };

    var getMatrixProduct = function (m1, m2) {
        var result = [];
        for(var j = 0; j < m2.length; j++) {
            result[j] = [];
            for(var k = 0; k < m1[0].length; k++) {
                var sum = 0;
                for(var i = 0; i < m1.length; i++) {
                    sum += m1[i][k] * m2[j][i];
                }
                result[j].push(sum);
            }
        }
        return result;
    };

    var evaluateTicTacToePosition = function (gridArray) {
        if (gridArray[0][0] == gridArray[1][1] && gridArray[1][1] == gridArray[2][2] && gridArray[0].length && gridArray[1].length && gridArray[2].length > 0) {
            if(gridArray[0][0] == 'X'){
                return 'X';
            }
            else {
                return 'O';
            }
        }
    }



    console.log(getFizzBuzz(15));
    console.log(getFactorial(5));
    console.log(getSumBetweenNumbers(1, 5));
    console.log(isTriangle(3, 4, 5));
    console.log(isInsideCircle({ center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }));
    console.log(findFirstSingleChar('abracadabra'));
    console.log(getIntervalString(3, 1, false, false));
    console.log(reverseString('onetwo'));
    console.log(reverseInteger(12345));
    console.log(isCreditCardNumber(79927398713));
    console.log(getDigitalRoot(12345));
    console.log(isBalancedBrackets('[[][][[]]]'));
    console.log(toNaryString(1024, 2));
    console.log(getMatrixProduct([[ 1, 0, 0 ],[ 0, 1, 0 ],[ 0, 0, 1 ]], [[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]));
    console.log(evaluateTicTacToePosition([[ 'X',   ,'0' ], [    ,'X','0' ], [    ,   ,'X' ]]));
    console.log();

})();
