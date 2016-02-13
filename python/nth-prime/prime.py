def prime(number):
    for i in range(2, number):
        if 0 == (number % i):
            return False
    
    return True

def nth_prime(index):
    if (index < 1):
        return
    
    if (1 == index):
        return 2
    
    possible_prime = 3

    i = 1
    while i < index:
        if prime(possible_prime):
            i += 1
        
        possible_prime += 2

    return possible_prime - 2