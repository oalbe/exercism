def palindrome(number):
    str_number = str(number)
    
    digits = len(str_number)
    for i in range(digits):
        if (str_number[i] != (str_number[digits - i - 1])):
            return False

    return True

def generate(max_factor, min_factor):
    p_factors = {}
    p_products = []
    
    product = 0
    for i in range(max_factor, min_factor - 1, -1):
        for j in range(max_factor, min_factor - 1, -1):
            product = i * j
            if palindrome(product):
                p_factors[product] = (i, j)
                p_products.append(product)
    
    return (p_factors, p_products)

def largest_palindrome(max_factor, min_factor=1):
    generated_factors, generated_products = generate(max_factor, min_factor)
    
    # print("generated_products = ", generated_products)
    # print("generated_factors = ", generated_factors)
    # print("generated_factors.values() = ", generated_factors.values())
    # print(max(generated_factors))
    # gen_factors_values = []
    # gen_factors_values = list(generated_factors.values())
    # print("gen_factors_values = ", gen_factors_values)
    return (max(generated_products), generated_factors[max(generated_factors)])

def smallest_palindrome(max_factor, min_factor):
    return 0