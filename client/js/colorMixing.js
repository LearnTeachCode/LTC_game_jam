/**
 * LtcColors is a class that handles the color mixing functionalities
 * To test, call ltcColors.[function-name]()
 */
var ltcColors = (function(){
    var color1;
    var color2;

    return{

        /**
         * getColorMix returns the combination of color1 and color2
         * if either is empty, then return the nonempty one
         * if both are empty, return -1
         */
        getColorMix: function(){
            // if color1 and color2 are valid, return their average blend as a Color object 
            // Color object contains r, g, b, a(0 to 1) properties and h, s, l and v.
            if(color1 != null && color2 != null){
                return this.getAverageColor(color1, color2);
            }
            // return the valid color, if neither is valid then return -1
            else{
                if(color1 != null)
                    return color1;
                if(color2 != null)
                    return color2;
                return -1;
            }
        },

        // addColor swaps color2 with color1 if color1 is not empty, then places newColor to color1
        // gets rid of previous color2 if not empty
        // Test case for input newColor: Phaser.Color.createColor(r,g,b)
        addColor: function(newColor){
            color2 = (color1 != null) ? color1: color2;
            color1 = newColor;
            if(DEBUG){
                console.log("New Color Added");
                console.log("Color1:" + color1.r + "," + color1.g + "," + color1.b + "," + color1.a);
                if(color2)
                    console.log("Color2:" + color2.r + "," + color2.g + "," + color2.b + "," + color2.a);
                else
                    console.log("Color2: None");
            }
        },

        // Return the average blend of color1 and color2 as a Color Object
        // Color object contains r, g, b, a(0 to 1) properties and h, s, l and v.
        getAverageColor: function(color1, color2){
            var rAvg = Math.round((color1.r + color2.r) / 2);
            var gAvg = Math.round((color1.g + color2.g) / 2);
            var bAvg = Math.round((color1.b + color2.b) / 2);
            var newAvg = Phaser.Color.createColor(rAvg, gAvg, bAvg);
            if(DEBUG){
                console.log("New Average Color");
                console.log("Color1:" + newAvg.r + "," + newAvg.g + "," + newAvg.b + "," + newAvg.a);
            }
            return newAvg;
        }

    }
})();
