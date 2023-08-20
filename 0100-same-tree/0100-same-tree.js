/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    const tree = (p, q) => {
        if(!p && !q) return true
        if((p !== null && q== null) || (p === null && q !==null)) return false;
        if(p.val !== q.val) return false
        
        return tree(p.left, q.left) && tree(p.right, q.right)
    }
    
    
    return tree(p, q)
};