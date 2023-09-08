/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(...promise) {
    const PromiseAllResult = await Promise.all([...promise])
    
    return PromiseAllResult.reduce((acc ,cur) => acc+cur)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */