def palindrome(number):
    str_number = str(number)
    return str_number == str_number[::-1]

def generate(max_factor, min_factor):
    p_factors = {}
    p_products = []

    product = 0
    for i in range(max_factor, min_factor - 1, -1):
        for j in range(i, min_factor - 1, -1):
            product = i * j
            if palindrome(product):
                p_factors[product] = (i, j)
                p_products.append(product)

    return (p_factors, p_products)

def palindrome_helper(max_factor, min_factor, callback):
    generated_factors, generated_products = generate(max_factor, min_factor)
    appropriated_product = callback(generated_products)

    return (appropriated_product, generated_factors[appropriated_product])

def largest_palindrome(max_factor, min_factor = 1):
    return palindrome_helper(max_factor, min_factor, max)

def smallest_palindrome(max_factor, min_factor = 1):
    return palindrome_helper(max_factor, min_factor, min)