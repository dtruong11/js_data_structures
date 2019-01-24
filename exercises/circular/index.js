// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  if(!list.head) return false 
  let f = list.head
  let q = list.head

  // if a normal linked list, iterate through the end
  // if the next two nodes might not exist, normal list 
  while (q.next !== null && q.next.next !== null) {
    // meanwhile, if f = q => return true 
    f = f.next
    q = q.next.next
    if (f === q) return true
  }
  return false  
}

module.exports = circular;
