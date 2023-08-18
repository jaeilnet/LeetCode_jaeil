/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
    let stack = new ListNode(0)
    let head = stack
    
    while(list1 && list2){  
        if(list1.val <= list2.val){
            stack.next = list1
            list1 = list1.next
        }else {
            stack.next = list2
            list2 = list2.next
        }
        
        stack = stack.next
    }
    
    if(list1 !== null){
        stack.next = list1
    }else {
        stack.next = list2
    }
    
    return head.next
    
};