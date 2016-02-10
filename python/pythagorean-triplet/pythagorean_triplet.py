def is_triplet(triplet):
    sorted_triplet = tuple(sorted(triplet))
    a_sqr = sorted_triplet[0] ** 2
    b_sqr = sorted_triplet[1] ** 2
    c_sqr = sorted_triplet[2] ** 2

    if ((a_sqr + b_sqr) == c_sqr):
        return True
    
    return False

def primitive_triplets():
    return 0

def triplets_in_range():
    return 0