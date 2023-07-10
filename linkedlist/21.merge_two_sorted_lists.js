var mergeTwoLists = function (list1, list2) {
    // Create a new head node and a pointer for the merged list
    let head = new ListNode();
    let merged = head;

    // Compare the nodes until one of the lists reaches its end
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            merged.next = list1;
            list1 = list1.next;
        } else {
            merged.next = list2;
            list2 = list2.next;
        }
        merged = merged.next;
    }

    // Attach the remaining nodes of the non-empty list
    merged.next = list1 || list2;

    // Return the head of the merged list (next node of the head node)
    return head.next;
};