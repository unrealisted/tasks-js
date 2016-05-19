(function(){

    var
        parseDataFromRfc2822 = function (value) {
            return new Date(value)
        },

        parseDataFromIso8601 = function (value) {
            return new Date(value)
        },

        year,
        dat,
        isLeapYear = function (date) {
            dat = new Date(date);
            year = dat.getFullYear()
            if(Number.isInteger(year / 100)){
                return 'leap year';
            }
            else{
                return 'not a leap year';
            }
        },

        utc1,
        utc2,
        a,
        b,
        timeSpanToString = function (startDate, endDate) {
            a = new Date(startDate);
            b = new Date(endDate);
            utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.floor((utc2 - utc1))
        }





    console.log(parseDataFromRfc2822('December 17, 1995 03:24:00'));
    console.log(parseDataFromIso8601('2016-01-19T16:07:37+00:00'));
    console.log(isLeapYear(Date(1977,1,1)));
    console.log(timeSpanToString(Date(2000,1,1,10,0,0), Date(2000,1,1,11,0,0)));
    console.log();
    console.log();

})();