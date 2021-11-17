function josephus(list, m) {
  let currentNode = list.head;

  // Creating a circular list by setting the tail.next to the head of the list
  const tail = list.find((node) => !node.next);
  tail.next = currentNode;

  while (currentNode.next != currentNode) {
    // Counting up to m - 1 times
    for (let i = 1; i < m; i++) {
      // Setting the currentNode to the 'm th' node in the list, essentially counting to the 'm th' in the list
      currentNode = currentNode.next;
    }

    // The next item in the list will be removed. If it is the head, we need to assign a new head
    if (currentNode.next === list.head) {
      // Setting the new head to be the node after the head
      list.head = list.head.next;
    }

    // Skipping over the next node, essentially removing it from the list
    currentNode.next = currentNode.next.next;
    // Starting the next count at the new next node in the list
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

module.exports = josephus;
