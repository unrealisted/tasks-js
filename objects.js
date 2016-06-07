(function(){

    var Rectangle = function (width, height) {
        this.width = width;
        this.height = height;
    };
    Rectangle.prototype.getArea = function(){
        return this.width * this.height;
    };
    var r = new Rectangle(4, 5);

    var getJSON = function (obj) {
        return JSON.stringify(obj);
    };

    var fromJSON = function (json) {
        return JSON.parse(json);
    };

    var cssSelectorBuilder = {

        element: function(value) {
            var el = document.getElementsByTagName(value);
            if(el.length > 0){return value;}
        },

        id: function(value) {
            var el = document.getElementById(value);
            if(el){return '#' + value};
        },
    };


    

    console.log(r.width);
    console.log(r.height);
    console.log(r.getArea());
    console.log(getJSON({ width: 10, height : 20 }));
    console.log(fromJSON('{"width":10, "height":20}'));
    console.log(cssSelectorBuilder.element('a'));
    console.log(cssSelectorBuilder.id('idi'));
})();