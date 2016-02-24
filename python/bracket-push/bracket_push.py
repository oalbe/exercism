def closing_bracket(br):
    if ('}' == br) or (']' == br) or (')' == br):
        return True
    
    return False

def bracket_match(opening, closing):
    if ('(' == opening) and (')' == closing):
        return True
    
    if ('[' == opening) and (']' == closing):
        return True
    
    if ('{' == opening) and ('}' == closing):
        return True
    
    return False

def pop_noexcept(stack):
    return stack.pop() if not (len(stack) <= 0) else -1

def check_brackets(br_input):
    stack = []

    for bracket in br_input:
        if closing_bracket(bracket):
            if not bracket_match(pop_noexcept(stack), bracket):
                return False
        else:
            stack.append(bracket)

    return (len(stack) <= 0)