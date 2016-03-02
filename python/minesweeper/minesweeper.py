def clean_grid(input_grid):
    cleaned_grid = []
    
    cut_grid = input_grid[1:-1]
    for row in cut_grid:
        cleaned_grid.append(row[1:-1])
    
    return cleaned_grid

def normalize_grid(cleaned_grid):
    normalized_grid = []
    first_last_row = '+' + ''.join(['-' for i in cleaned_grid[0]]) + '+'

    normalized_grid.append(first_last_row)
    for row in cleaned_grid:
        normalized_grid.append('|' + row + '|')
    
    normalized_grid.append(first_last_row)
    
    return normalized_grid

def board(input_grid):
    output = ''
    
    print(input_grid)
    print(clean_grid(input_grid))
    print(normalize_grid(clean_grid(input_grid)))
    
    return output