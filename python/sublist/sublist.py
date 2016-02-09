def check_helper(ref_list, test_list):
    if not ref_list:
        return True

    # TODO: Should I add a check to first verify that each element of the ref_list
    # is present in the test_list? Seems to only add overhead.

    status = False
    i = 0
    j = 0
    while i < len(test_list):
        if j < len(ref_list):
            if test_list[i] != ref_list[j]:
                if status:
                    i -= j

                j = -1                
                status = False
            else:
                status = True
        # FIXME: This branch should theoretically save only ONE cycle. Consider removing it.
        elif j == len(ref_list):
            return True
        
        j += 1
        i += 1
    
    return status

SUBLIST, SUPERLIST, EQUAL, UNEQUAL = range(4)

# Check if list_a is a sublist of list_b
def check_lists(list_a, list_b):
    # list_a EQUAL list_b case:
    if list_a == list_b:
        return EQUAL

    # list_a SUBLIST of list_b case:
    if len(list_a) < len(list_b):
        return SUBLIST if check_helper(list_a, list_b) else UNEQUAL
    
    # list_a SUPERLIST of list_b case:
    if len(list_a) > len(list_b):
        return SUPERLIST if check_helper(list_b, list_a) else UNEQUAL
    
    return UNEQUAL