import re


operations = {
    'plus': (lambda lval, rval: lval + rval),
    'minus': (lambda lval, rval: lval - rval),
    'multiplied': (lambda lval, rval: lval * rval),
    'divided': (lambda lval, rval: lval / rval)
}

def calculate(question):
    clean_input = re.sub(r"\?", '', question)
    clean_input = re.sub(r"\ by", '', clean_input)
    clean_input = clean_input.split(' ')
    
    # if (!this.isValidQuestion(clean_input)):
    #     raise ValueError("Invalid question.")

    result = 0
    limit = len(clean_input)
    for i in range(limit):
        if clean_input[i] in operations:
            if result:
                result = operations[clean_input[i]](int(result), int(clean_input[i + 1]))
            else:
                result = operations[clean_input[i]](int(clean_input[i - 1]), int(clean_input[i + 1]))

    return result