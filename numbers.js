(function(){
    
    var
        getRectangleArea = function (width, height) {
            return width * height;
        },

        getCicleCircumference = function (radius) {
            return 2 * Math.PI * radius;
        },

        getAverage = function (value1, value2) {
            return (value1 + value2) / 2
        },

        getDistanceBetweenPoints = function (x1, y1, x2, y2) {
            return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
        },

        getLastDigit = function (value) {
            return Math.abs(value) % 10;
        },

        parseNumberFromString = function (value) {
            return Number(value);
        },

        isPrime = function (n) {
            if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
            if (n%2==0) return (n==2);
            if (n%3==0) return (n==3);
            var m=Math.sqrt(n);
            for (var i=5;i<=m;i+=6) {
                if (n%i==0)     return false;
                if (n%(i+2)==0) return false;
            }
            return true;
        },

        numb,
        toNumber = function (value, def) {
            numb = Number(value);
            if(numb === isNaN){
                return def;
            }
            else{
                return numb;
            }
        }









    console.log(getRectangleArea(4, 5));
    console.log(getCicleCircumference(5));
    console.log(getAverage(5, 5));
    console.log(getDistanceBetweenPoints(0,0, 0,1));
    console.log(getLastDigit(20));
    console.log(parseNumberFromString('100'));
    console.log(isPrime(4));
    console.log(toNumber(null, 0));
    console.log();

})();