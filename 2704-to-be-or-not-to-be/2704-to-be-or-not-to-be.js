/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    const result = (condition, message) => {
        if(condition){
            return true
        }else {
            throw Error(message)
        }
    }
  
    const toBe = (v) => result(val===v, "Not Equal")
    const notToBe = (v) => result(val !== v, "Equal")

    return {
        toBe,
        notToBe
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */