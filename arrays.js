(function(){

    var
        findElement = function (arr, value) {
            return arr.findIndex(function(item){
                return item == value;
            })
        },

        array,
        generateOdds = function (len) {
            array = Array.apply(null, Array(len));
            return array.map(function (x, i) { return i }).filter(filter);
            function filter(value) {
                return value % 2;
            }
        },

        //doubleArray = function (arr) {
         //   return arr.push(arr.values());
       // }

        getArrayOfPositives = function (arr) {
            return arr.filter(function(val){
                return val > 0;
            });
        },

        getArrayOfStrings = function (arr) {
            return arr.filter(function(val){
               return (typeof val === 'string')
            });
        },

        removeFalsyValues = function (arr) {
            return arr.filter(Boolean);
        },

        getUpperCaseStrings = function (arr) {
            return arr.map(function(val){
                return val.toUpperCase();
            })
        },

        getStringsLength = function (arr) {
            return arr.map(function(val){
                return val.length;
            })
        },

        insertItem = function (arr, item, index) {
            arr.splice(index, 0, item);
            console.log(arr.join())
        },

        getHead = function (arr, n) {
            return arr.slice(0, n)
        },

        getTail = function (arr, n) {
            return arr.slice(-n)
        },

        toCsvText = function (arr) {
            return arr[0] + '\n' + arr[1] + '\n'+ arr[2] + '\n'+ arr[3] + '\n';
        },

        toArrayOfSquares = function (arr) {
            return arr.map(function(val){
                return val * val;
            })
        },

        getMovingSum = function (arr) {
            return arr.reduce(function(acc, n) {acc.push( (acc.length > 0 ? acc[acc.length-1] : 0) + n); return acc }, []);
        },

        getSecondItems = function (arr) {
            return arr.filter(function(val, ind){
                return ind % 2 == 0;
            })
        },

        get3TopItems = function (arr) {
            return arr.sort(function(a, b){
                if(a < b){ return 1}
                else if(a == b) { return 0}
                else { return -1}
            }).slice(0, 3);
        },

        getPositivesCount = function (arr) {
            return arr.filter(function(val){
                return val > 0;
            }).length
        },

        sortDigitNamesByNumericOrder = function (arr) {
            return arr.sort(function(a, b){
                if(a < b){ return 1}
                else if(a == b) { return 0}
                else { return -1}
            })
        },

        getItemsSum = function (arr) {
            return arr.reduce(function(a, b){
                return a + b;
            });
        },

        getFalsyValuesCount = function (arr) {
            return arr.filter(function(val){
                return (typeof val === 'string' || val === Boolean || val === null || val === undefined)
            }).length
        },

        findAllOccurences = function (arr, item) {
            return arr.filter(function(val){
                return val == item;
            }).length
        },

        toStringList = function (arr) {
            return arr.toString();
        },

        sortCitiesArray = function (arr) {
            return arr.sort(function(a, b){
                if(a.country > b.country){
                    return 1;
                }
                else if (a.country < b.country) {
                    return -1;
                }
                else {
                    return 0;
                }
            })
        },


        getIdentityMatrix = function (n) {
            return new Array(n).fill(new Array(n));
        },


        getIntervalArray = function (start, end) {
           return Array.from({ length: end }, (start, end) => end);
        },

        distinct = function (arr) {
            return arr.filter(function(elem, pos) { return arr.indexOf(elem) == pos; })
        },

        //group = function (array, keySelector, valueSelector) {
        //}

        newar = [],
        selectMany = function (arr, childrenSelector) {
            if(childrenSelector === '(x) => x'){
                arr.forEach(function(item){
                    item.forEach(function(it){
                        newar.push(it)
                    })
                });
                return newar;
            }
            else if(childrenSelector === "x => x.split('')"){
                 arr.forEach(function(item){
                    arr.push(item.split(''));

                });
                return arr;
            }
        },

        nar,
        getElementByIndexes = function (arr, indexes) {
            arr.forEach(function(item, i){
                if (arr.indexOf(item) == indexes[0]) {
                    if(indexes.length > 1){
                        nar = item[indexes[1]];
                    }
                    else {
                        nar =  item;
                    }
                }
            });
            return nar;
        };

    console.log(findElement(['Ace', 10, true], 10));
    console.log(generateOdds(7));
    //console.log(doubleArray(['Ace', 10, true]));
    console.log(getArrayOfPositives([-1, 2, -5, -4, 0]));
    console.log(getArrayOfStrings([ 0, 1, 'cat', 3, true, 'dog' ]));
    console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]));
    console.log(getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]));
    console.log(getStringsLength([ 'a', 'a', 'bc', 'def', 'ghij' ]));
    insertItem([ 1, 3, 4, 5 ], 2, 1);
    console.log(getHead([ 1, 2, 3, 4, 5 ], 2));
    console.log(getTail([ 'a', 'b', 'c', 'd'], 3));
    console.log(toCsvText([[  0, 1, 2, 3, 4 ], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ], [ 30,31,32,33,34 ]] ));
    console.log(toArrayOfSquares([ 0, 1, 2, 3, 4, 5 ]));
    console.log(getMovingSum([ 1, 1, 1, 1, 1 ]));
    console.log(getSecondItems([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]));
    console.log(get3TopItems([ 1,2,3,4,5,6,7,8,9,10 ]));
    console.log(getPositivesCount([ -1, 0, 1, 2 ]));
    console.log(sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]));
    console.log(getItemsSum([ 1, 2, 3 ]));
    console.log(getFalsyValuesCount([ -1, 'false', null, 0 ]));
    console.log(findAllOccurences([ 0, 0, 1, 1, 1, 2 ], 1));
    console.log(toStringList([0, false, 'cat', NaN, true, '']));
    console.log(sortCitiesArray([{ country: 'Russia',  city: 'Moscow' }, { country: 'Belarus', city: 'Minsk' }, { country: 'Poland',  city: 'Warsaw' }, { country: 'Russia',  city: 'Saint Petersburg' }, { country: 'Poland',  city: 'Krakow' }, { country: 'Belarus', city: 'Brest' }]  ));
    console.log(getIdentityMatrix(2));
    console.log(getIntervalArray(0, 5));
    console.log(distinct([ 'a', 'a', 'a', 'a' ]));
    console.log(selectMany([[1, 2], [3, 4], [5, 6]], "(x) => x"));
    console.log(getElementByIndexes([[1, 2], [3, 4], [5, 6]], [0,0]));
})();