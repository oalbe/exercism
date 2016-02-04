def prime_factors(num):
    factors = []
    
    i = 2
    while (i <= num):
        if 0 == (num % i):
            factors.append(i)
            
            # NOTE: This hides an implicit cast to int
            num = num // i
            i = 1
        
        i += 1
    
    return factors