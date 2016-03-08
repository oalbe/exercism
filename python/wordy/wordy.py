import re


operations = {
    'plus': (lambda lval, rval: lval + rval),
    'minus': (lambda lval, rval: lval - rval),
    'multiplied': (lambda lval, rval: lval * rval),
    'divided': (lambda lval, rval: lval / rval)
}

def valid_question(question):
    well_formed_rx = r"What\ is(\ -?[0-9]*\ (plus|minus|divided\ by|multiplied\ by))*\ -?[0-9]*\?"
    return re.match(well_formed_rx, question)

def calculate(question):
    if not valid_question(question):
        raise ValueError("Invalid question.")

    clean_input = re.sub(r"\ by", '', re.sub(r"\?", '', question)).split(' ')

    result = 0
    limit = len(clean_input)
    for i in range(limit):
        if clean_input[i] in operations:
            if result:
                result = operations[clean_input[i]](int(result), int(clean_input[i + 1]))
            else:
                result = operations[clean_input[i]](int(clean_input[i - 1]), int(clean_input[i + 1]))

    return result