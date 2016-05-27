(function(){

    var getRegexForGuid = function (value) {
        var patt = /\{[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}\}/i;
        return patt.exec(value);
    };

    var getRegexForIPv4 = function (string) {
        var patt = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            return patt.exec(string);
    };

    var getRegexForSSN = function (string) {
        var patt = /\d{3}-\d{2}-(?!0000)\d{4}/;
        return patt.exec(string);
    };

    var getPasswordValidator = function (min) {
        var pass = 'pass';
        var patt = /[a-z]{4}/;
        if(pass.length == min){
            return patt.exec(pass)
        }
    };
    
    console.log(getRegexForGuid('{3F2504E0-4F89-41D3-9A0C-0305E82C3301}'));
    console.log(getRegexForIPv4('127.0.0.1'));
    console.log(getRegexForSSN('123-45-0000'));
    console.log(getPasswordValidator(4));
})();