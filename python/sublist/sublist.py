SUBLIST, SUPERLIST, EQUAL, UNEQUAL = range(4)

# Check if list_a is a sublist of list_b
def check_lists(list_a, list_b):
    response = UNEQUAL
    
    if not list_b:
        response = SUBLIST

    # list_a EQUAL list_b case
    if len(list_a) == len(list_b):
        # if not list_a and not list_b:
        #     return EQUAL
        
        if list_a == list_b:
            return EQUAL

    # list_a SUBLIST of list_b case
    if len(list_a) < len(list_b):
        for i in list_a:
            if not (i in list_b):
                return UNEQUAL
        
        return SUBLIST
    
    print('in')
    # list_a SUPERLIST of list_b case
    if len(list_a) > len(list_b):
        
        for i in list_b:
            
            if not (i in list_a):
                return UNEQUAL
        
        return SUPERLIST
    
    return response