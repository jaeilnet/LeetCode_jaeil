/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(fc) {
	return function(x) {
        let sum = x
        for(let i=fc.length-1; i>=0; i--) {
            sum = fc[i](sum)
        }
        
        return sum
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */