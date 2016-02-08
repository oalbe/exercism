def index_noexcept(array, item):
    if item in array:
        return array.index(item)
    
    return -1

# TODO: Should checks to ensure the existence of the items be made?
def delta_pos(truth_array, test_array, item):
    truth_item = truth_array[index_noexcept(truth_array, item) - 1]
    
    return index_noexcept(test_array, item) - index_noexcept(test_array, truth_item)

def check_helper(ref_list, test_list):
    if not ref_list:
        return True
    
    match_test = test_list
    
    flag = True
    while flag:
        start_index = -1
        if ref_list[0] in match_test:
            start_index = index_noexcept(match_test, ref_list[0])
        else:
            return False
        
        match_test = match_test[start_index :]
    
        # print('match_test = ', match_test)
        if len(match_test) < len(ref_list):
            return False
        
        i = 0
        flag_in = True
        while i < len(ref_list) and flag_in:
            if match_test[i] != ref_list[i]:
                match_test = match_test[i + 1 :]
                flag_in = False

            i += 1
        
        if i == len(ref_list):
            return True

    
    # for i in ref_list:
    #     if not (i in test_list):
    #         return False
    #     else:
            # if index_noexcept(ref_list, i) > 0:
            #     # print('index = ', index_noexcept(ref_list, i))
            #     # print('delta_pos = ', delta_pos(ref_list, test_list, i))
            #     if 1 != delta_pos(ref_list, test_list, i):
            #         return False
    
    return True

SUBLIST, SUPERLIST, EQUAL, UNEQUAL = range(4)

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