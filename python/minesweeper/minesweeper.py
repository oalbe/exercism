def clean_grid(input_grid):
    cleaned_grid = []
    
    cut_grid = input_grid[1:-1]
    for row in cut_grid:
        cleaned_grid.append(row[1:-1])
    
    return cleaned_grid

def normalize_grid(cleaned_grid):
    normalized_grid = []
    first_last_row = '+' + ('-' * len(cleaned_grid[0])) + '+'

    normalized_grid.append(first_last_row)
    for row in cleaned_grid:
        normalized_grid.append('|' + row + '|')
    
    normalized_grid.append(first_last_row)
    
    return normalized_grid

class Cell:
    def __init__(self, row_index, col_index):
        self.row_index = row_index
        self.col_index = col_index

def check_row_right_mine(cell, cleaned_grid):
    if (cell.col_index + 1) < len(cleaned_grid[cell.row_index]):
        if '*' == cleaned_grid[cell.row_index][cell.col_index + 1]:
            return True

    return False

def check_row_left_mine(cell, cleaned_grid):
    if (cell.col_index - 1) >= 0:
        if '*' == cleaned_grid[cell.row_index][cell.col_index - 1]:
            return True

    return False

def row_mines_value(cell, cleaned_grid):
    row_value = 0
    
    if check_row_left_mine(cell, cleaned_grid):
        row_value += 1
    
    if check_row_right_mine(cell, cleaned_grid):
        row_value += 1
    
    return row_value

def check_column_down_mine(cell, cleaned_grid):
    if (cell.row_index + 1) < len(cleaned_grid):
        if '*' == cleaned_grid[cell.row_index + 1][cell.col_index]:
            return True
    
    return False

def check_column_up_mine(cell, cleaned_grid):
    if (cell.row_index - 1) >= 0:
        if '*' == cleaned_grid[cell.row_index - 1][cell.col_index]:
            return True
    
    return False

def column_mines_value(cell, cleaned_grid):
    col_value = 0

    if check_column_up_mine(cell, cleaned_grid):
        col_value += 1
        
    if check_column_down_mine(cell, cleaned_grid):
        col_value += 1
    
    return col_value

def check_diagonal_right_down_mine(cell, cleaned_grid):
    if ((cell.row_index + 1) < len(cleaned_grid)) and ((cell.col_index + 1) < len(cleaned_grid[cell.row_index])):
        if '*' == cleaned_grid[cell.row_index + 1][cell.col_index + 1]:
            return True
    
    return False

def check_diagonal_right_up_mine(cell, cleaned_grid):
    if ((cell.row_index + 1) < len(cleaned_grid)) and ((cell.col_index - 1) >= 0):
        if '*' == cleaned_grid[cell.row_index + 1][cell.col_index - 1]:
            return True
    
    return False

def check_diagonal_left_up_mine(cell, cleaned_grid):
    if ((cell.row_index - 1) >= 0) and ((cell.col_index - 1) >= 0):
        if '*' == cleaned_grid[cell.row_index - 1][cell.col_index - 1]:
            return True
    
    return False

def check_diagonal_left_down_mine(cell, cleaned_grid):
    if ((cell.row_index - 1) >= 0) and ((cell.col_index + 1) < len(cleaned_grid[cell.row_index])):
        if '*' == cleaned_grid[cell.row_index - 1][cell.col_index + 1]:
            return True
    
    return False

def diagonal_mines_value(cell, cleaned_grid):
    diagonal_value = 0
    
    if check_diagonal_right_up_mine(cell, cleaned_grid):
        diagonal_value += 1
    
    if check_diagonal_right_down_mine(cell, cleaned_grid):
        diagonal_value += 1
    
    if check_diagonal_left_down_mine(cell, cleaned_grid):
        diagonal_value += 1
    
    if check_diagonal_left_up_mine(cell, cleaned_grid):
        diagonal_value += 1
    
    return diagonal_value

def calculate_cell_value(cell, cleaned_grid):
    return diagonal_mines_value(cell, cleaned_grid) \
           + column_mines_value(cell, cleaned_grid) \
           + row_mines_value(cell, cleaned_grid)

def grid_validation(input_grid):
    # Validate rows lengths, because a grid with rows of 
    # different lengths is not a valid grid
    for row_index, row in enumerate(input_grid[1:]):
        if len(row) != len(input_grid[row_index - 1]):
            return False
    
    # Validate rows well-formation, because a border-less grid isn't valid
    borderless_grid = input_grid[1:-1]
    for row in borderless_grid:
        if '|' != row[0] or '|' != row[-1]:
            return False
    
    # Validate wrong placeholders, because an input grid 
    # should only have empty cells and asterisks placeholders
    for row in borderless_grid:
        for cell in row[1:-1]:
            if ' ' != cell and '*' != cell:
                return False

    return True

def board(input_grid):
    if not grid_validation(input_grid):
        raise ValueError("Invalid Grid.")

    cleaned_grid = clean_grid(input_grid)

    for row_index, row in enumerate(cleaned_grid):
        for cell_index, cell in enumerate(row):
            if ' ' == cell:
                value = calculate_cell_value(Cell(row_index, cell_index), cleaned_grid)
                
                if value > 0:
                    list_row = list(cleaned_grid[row_index])
                    list_row[cell_index] = str(value)
                    cleaned_grid[row_index] = ''.join(list_row)

    return normalize_grid(cleaned_grid)