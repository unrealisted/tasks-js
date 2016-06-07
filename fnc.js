(function(){

    var compose = function (f, g) {
        return function(x) {
            return f(g(x));
        };
    };
    var fx = function(x){
        return Math.sin(x);
    };
    var gx = function(x){
        return Math.asin(x);
    };
    var doit = compose(fx, gx)


    var getPowerFunction = function (exponent) {
        return function(x){
            return Math.pow(x, exponent);
        }
    };
    var power2 = getPowerFunction(2);


    var getPolynom = function (a, b , c) {
        return function (){
            return 'y='+a+'*'+'x^'+b+'+'+c;
        };

    };
    var getget = getPolynom(2, 3 ,5)


    var memoize = function (func) {
        var cache = Math.random();
        return function() {
            if(cache) {
                return cache;
            }
            else {
                var val = func.apply(this, arguments);
                cache = val;
                return val;
            }
        };
    };
    var memoizer = memoize();




    console.log(doit(1));
    console.log(power2(4));
    console.log(getget());
    console.log(memoizer());
    console.log(memoizer());
    console.log();

})();