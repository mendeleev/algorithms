(function() {
    var match = {
        /*match object*/
        object: function(objA, objB) {
            var isMatched = true,
              properties = {
                objA: Object.getOwnPropertyNames(objA),
                objB: Object.getOwnPropertyNames(objB)
              };

              //check if number of object properties are equal
              if(properties.objA.length !== properties.objB.length) {
                isMatched = false;
              }
    
              for(var name in objA) {
                //loop stop if false value were found
                if(!isMatched) break;
                //match array is the value is array
                if(objA[name] instanceof Array) {
                  isMatched = this.array(objA[name], objB[name]);
                  continue;
                }
                //match object if current value is object
                if(objA[name] instanceof Object) {
                  isMatched = this.object(objA[name], objB[name]);
                  continue;
                }
                //match property
                if(objA[name] !== objB[name]) {
                  isMatched = false;
                }
              }
            return isMatched;
        },
        /*match array*/
        array: function(a, b) {            
          if(!a || !b) { return false;}
          if(a.length !== b.length) { return false;}

          for(var i = 0; i < a.length; i++) {
            if(a[i] instanceof Array) {
              this.array(a[i], b[i]);
            } else if(b.indexOf(a[i]) < 0) {
              return false;
            }
          }

          return true;
        }
    };
        
    console.log(match.array([1,2,3,4], [3,2,1,4]));
    console.log(match.array([1,2,3,4], [3,2,1,4,5]));

    console.log(match.object({a:1}, {a:1}));
    console.log(match.object({a:1, b:[1,2,3]}, {b:[3,1,2], a:1}));
        
})();