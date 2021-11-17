/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
    if (!list.length) {
        return list;
    }

    let x_next = x.next;
    let x_prev = list.findWithPrevious(node => node === x)[1];
    let y_prev = list.findWithPrevious(node => node === y)[1];

    x.next = y.next;
    y.next = x_next;

    // If x_prev exists, it means x is not the head of the list
    if (x_prev) {
        x_prev.next = y;
    } else {
        list.head = y;
    }

    // If y_prev exists, it means y is not the head of the list
    if (y_prev) {
        y_prev.next = x;
    } else {
        list.head = x;
    }

    return list;
}

module.exports = swap;
