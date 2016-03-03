def extract_grid(input_board):
    grid = []
    
    cut_grid = input_board[1:-1]
    for row in cut_grid:
        grid.append(row[1:-1])
    
    return grid

def normalize_grid(grid):
    normalized_grid = []
    first_last_row = '+' + ('-' * len(grid[0])) + '+'

    normalized_grid.append(first_last_row)
    for row in grid:
        normalized_grid.append('|' + row + '|')
    
    normalized_grid.append(first_last_row)
    
    return normalized_grid

class Cell:
    def __init__(self, row_index, col_index):
        self.row_index = row_index
        self.col_index = col_index

def row_values_helper(cell, grid):
    
    return 0

def row_right_value(cell, grid):
    if (cell.col_index + 1) < len(grid[cell.row_index]):
        if '*' == grid[cell.row_index][cell.col_index + 1]:
            return 1

    return 0

def row_left_value(cell, grid):
    if (cell.col_index - 1) >= 0:
        if '*' == grid[cell.row_index][cell.col_index - 1]:
            return 1

    return 0

def row_mines_value(cell, grid):
    return row_left_value(cell, grid) + row_right_value(cell, grid)

def column_down_value(cell, grid):
    if (cell.row_index + 1) < len(grid):
        if '*' == grid[cell.row_index + 1][cell.col_index]:
            return 1
    
    return 0

def column_up_value(cell, grid):
    if (cell.row_index - 1) >= 0:
        if '*' == grid[cell.row_index - 1][cell.col_index]:
            return 1
    
    return 0

def column_mines_value(cell, grid):
    return column_up_value(cell, grid) + column_down_value(cell, grid)

def diagonal_rd_value(cell, grid):
    if ((cell.row_index + 1) < len(grid)) and ((cell.col_index + 1) < len(grid[cell.row_index])):
        if '*' == grid[cell.row_index + 1][cell.col_index + 1]:
            return 1
    
    return 0

def diagonal_ru_value(cell, grid):
    if ((cell.row_index + 1) < len(grid)) and ((cell.col_index - 1) >= 0):
        if '*' == grid[cell.row_index + 1][cell.col_index - 1]:
            return 1
    
    return 0

def diagonal_lu_value(cell, grid):
    if ((cell.row_index - 1) >= 0) and ((cell.col_index - 1) >= 0):
        if '*' == grid[cell.row_index - 1][cell.col_index - 1]:
            return 1
    
    return 0

def diagonal_ld_value(cell, grid):
    if ((cell.row_index - 1) >= 0) and ((cell.col_index + 1) < len(grid[cell.row_index])):
        if '*' == grid[cell.row_index - 1][cell.col_index + 1]:
            return 1
    
    return 0

def diagonal_mines_value(cell, grid):
    return diagonal_ru_value(cell, grid) + diagonal_rd_value(cell, grid) + \
           diagonal_ld_value(cell, grid) + diagonal_lu_value(cell, grid)

def calculate_cell_value(cell, grid):
    return diagonal_mines_value(cell, grid) + \
           column_mines_value(cell, grid) + \
           row_mines_value(cell, grid)

def grid_validation(input_board):
    # Validate rows lengths, because a grid with rows of 
    # different lengths is not a valid grid
    for row_index, row in enumerate(input_board[1:]):
        if len(row) != len(input_board[row_index - 1]):
            return False
    
    # Validate rows well-formation, because a border-less grid isn't valid
    borderless_grid = input_board[1:-1]
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

def board(input_board):
    if not grid_validation(input_board):
        raise ValueError("Invalid Grid.")

    grid = extract_grid(input_board)

    for row_index, row in enumerate(grid):
        for cell_index, cell in enumerate(row):
            if ' ' == cell:
                value = calculate_cell_value(Cell(row_index, cell_index), grid)
                
                if value > 0:
                    list_row = list(grid[row_index])
                    list_row[cell_index] = str(value)
                    grid[row_index] = ''.join(list_row)

    return normalize_grid(grid)