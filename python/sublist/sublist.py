def index_noexcept(array, item):
    if item in array:
        return array.index(item)
    
    return -1

SUBLIST, SUPERLIST, EQUAL, UNEQUAL = range(4)

def delta_pos(truth_array, test_array, item):
    truth_item = truth_array[index_noexcept(truth_array, item) - 1]
    # test_item = test_array[index_noexcept(test_array, truth_item)]
    
    return index_noexcept(test_array, item) - index_noexcept(test_array, truth_item)

def check_helper(ref_list, test_list):
    for i in ref_list:
        if not (i in test_list):
            return False
        elif index_noexcept(ref_list, i) > 0:
            # print('index = ', index_noexcept(ref_list, i))
            # print('delta_pos = ', delta_pos(ref_list, test_list, i))
            if 1 != delta_pos(ref_list, test_list, i):
                return False
    
    return True

# Check if list_a is a sublist of list_b
def check_lists(list_a, list_b):
    # list_a EQUAL list_b case:
    if len(list_a) == len(list_b):
        if list_a == list_b:
            return EQUAL

    # list_a SUBLIST of list_b case:
    if len(list_a) < len(list_b):
        # TODO: Make this loop against the length of the list instead of the list itself.
        # for i in list_a:
        #     if not (i in list_b):
        #         return UNEQUAL

        return SUBLIST if check_helper(list_a, list_b) else UNEQUAL
    
    # list_a SUPERLIST of list_b case:
    if len(list_a) > len(list_b):
        # TODO: Make this loop against the length of the list instead of the list itself.
        # for i in list_b:
        #     if not (i in list_a):
        #         return UNEQUAL
        
        return SUPERLIST if check_helper(list_b, list_a) else UNEQUAL
    
    return UNEQUAL