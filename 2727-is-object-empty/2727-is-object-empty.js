/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
        
    const [key ,value ] = Object.entries(obj)    
    
    if(!key) return true
    else return false
};