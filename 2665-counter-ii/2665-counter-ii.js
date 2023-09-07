/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    
    let saveNum = init
    
    const increment = () => saveNum += 1
    const decrement = () => saveNum -= 1
    const reset = () => {
        saveNum = init
        return saveNum
    }
    
    return {
        increment,
        reset,
        decrement,
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */