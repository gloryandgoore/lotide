
    const eqObjects = require("./eqObjects")
    
    
    const assertObjectsEqual = function(actual, expected) {
        if(eqObjects(actual, expected) === true){
            return "Objects are equal!"
        }
      };
      
      
      
      
      
      module.exports = assertObjectsEqual;