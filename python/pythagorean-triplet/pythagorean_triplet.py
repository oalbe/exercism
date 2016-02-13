#  https://stackoverflow.com/questions/575117/generating-unique-ordered-pythagorean-triplets
def is_triplet(triplet):
    sorted_triplet = tuple(sorted(triplet))
    a_sqr = sorted_triplet[0] ** 2
    b_sqr = sorted_triplet[1] ** 2
    c_sqr = sorted_triplet[2] ** 2

    if ((a_sqr + b_sqr) == c_sqr):
        return True
    
    return False

def primitive_triplets(component):
    m = 1
    n = 0
    triplets = set()
    while n <= component:
        # print(n)
        a = (m ** 2) - (n ** 2)
        c = (m ** 2) + (n ** 2)
        b = 2 * m * n
        # print("a = ", a)
        # print("b = ", b)
        # print("c = ", c)
        
        if (c == component) or (b == component) or (c == component):
            print((a, b, c))
            triplets.add((a, b, c))

        m += 1
        n += 1

    print('triplets = ', triplets)
    return triplets

def triplets_in_range():
    return 0