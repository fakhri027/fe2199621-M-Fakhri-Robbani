// Diberikan head dari singly linked list, kembalikan middle node dari inked list.
// Jika ada dua middle node, kembalikan middle node kedua.
//
// Contoh 1
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: middle node nya 3, maka dikembalikan nilai 3 beserta dengan next value nya, jadi 3, 4, 5
//
// Contoh 2
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: middle node nya 3 dan 4, kembalikan middle node kedua, maka dikembalikan nilai 4 beserta dengan next value nya, jadi 4, 5, 6

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    return {
        val: this.val,
        next: this.next,
    };
}

function middleNode(head) {
    let length = 1;
    let cur = head;
    let middle = head;
    while (cur.next) {
        length++;
        cur = cur.next;
    }
    if (length % 2 === 0) {
        for (let i = 0; i < length / 2; i++) {
            middle = middle.next;
        }
    } else {
        for (let i = 0; i < (length - 1) / 2; i++) {
            middle = middle.next;
        }
    }

    // TODO: answer here

    return middle;
}
let list = ListNode(1, ListNode(2, ListNode(3, null)));
let middle = middleNode(list);
console.log(middle); //ListNode(2, ListNode(3, null)));


module.exports = {
    ListNode,
    middleNode
}