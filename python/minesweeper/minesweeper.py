class Cell:
    def __init__(self, row_index, col_index):
        self.row = row_index
        self.col = col_index 

class Grid:
    def __init__(self, board):
        self.__board = board
        self.rows = self.extract()

    def row(self, row_index):
        return self.rows[row_index]
    
    def len(self):
        return len(self.rows)
    
    def row_len(self):
        return len(self.row(0))
    
    def cell(self, row_index, col_index):
        return self.rows[row_index][col_index]
    
    def set_cell(self, cell, value):
        list_row = list(self.rows[cell.row])
        list_row[cell.col] = str(value)
        self.rows[cell.row] = ''.join(list_row)
    
    def extract(self):
        grid = []
    
        cut_grid = self.__board[1:-1]
        for row in cut_grid:
            grid.append(row[1:-1])
        
        return grid
    
    def valid(self):
        # Validate rows lengths, because a grid with rows of 
        # different lengths is not a valid grid
        for row_index, row in enumerate(self.__board[1:]):
            if len(row) != len(self.__board[row_index - 1]):
                return False
        
        # Validate rows well-formation, because a border-less grid isn't valid
        borderless_grid = self.__board[1:-1]
        for row in borderless_grid:
            if row[0] != row[-1] and row[0] != '|':
                return False
        
        # Validate wrong placeholders, because an input grid 
        # should only have empty cells and asterisks placeholders
        for row in self.__board:
            for cell in row:
                if cell not in " +-|*":
                    return False

        return True
    
    def normalize(self):
        normalized_grid = []
        first_last_row = '+' + ('-' * self.row_len()) + '+'

        normalized_grid.append(first_last_row)
        for row in self.rows:
            normalized_grid.append('|' + row + '|')
        
        normalized_grid.append(first_last_row)
        
        return normalized_grid

def row_right_value(cell, grid):
    if (cell.col + 1) < grid.row_len():
        if '*' == grid.cell(cell.row, cell.col + 1):
            return 1

    return 0

def row_left_value(cell, grid):
    if (cell.col - 1) >= 0:
        if '*' == grid.cell(cell.row, cell.col - 1):
            return 1

    return 0

def row_mines_value(cell, grid):
    return row_left_value(cell, grid) + row_right_value(cell, grid)

def column_down_value(cell, grid):
    if (cell.row + 1) < grid.len():
        if '*' == grid.cell(cell.row + 1, cell.col):
            return 1
    
    return 0

def column_up_value(cell, grid):
    if (cell.row - 1) >= 0:
        if '*' == grid.cell(cell.row - 1, cell.col):
            return 1
    
    return 0

def column_mines_value(cell, grid):
    return column_up_value(cell, grid) + column_down_value(cell, grid)

def diagonal_rd_value(cell, grid):
    if ((cell.row + 1) < grid.len()) and ((cell.col + 1) < grid.row_len()):
        if '*' == grid.cell(cell.row + 1, cell.col + 1):
            return 1
    
    return 0

def diagonal_ru_value(cell, grid):
    if ((cell.row + 1) < grid.len()) and ((cell.col - 1) >= 0):
        if '*' == grid.cell(cell.row + 1, cell.col - 1):
            return 1
    
    return 0

def diagonal_lu_value(cell, grid):
    if ((cell.row - 1) >= 0) and ((cell.col - 1) >= 0):
        if '*' == grid.cell(cell.row - 1, cell.col - 1):
            return 1
    
    return 0

def diagonal_ld_value(cell, grid):
    if ((cell.row - 1) >= 0) and ((cell.col + 1) < grid.row_len()):
        if '*' == grid.cell(cell.row - 1, cell.col + 1):
            return 1
    
    return 0

def diagonal_mines_value(cell, grid):
    return diagonal_ru_value(cell, grid) + diagonal_rd_value(cell, grid) + \
           diagonal_ld_value(cell, grid) + diagonal_lu_value(cell, grid)

def calculate_cell_value(cell, grid):
    return diagonal_mines_value(cell, grid) + \
           column_mines_value(cell, grid) + \
           row_mines_value(cell, grid)

def board(input_board):
    grid = Grid(input_board)
    if not grid.valid():
        raise ValueError("Invalid Grid.")

    for row_index, row in enumerate(grid.rows):
        for cell_index, cell in enumerate(row):
            if ' ' == cell:
                current_cell = Cell(row_index, cell_index)
                value = calculate_cell_value(current_cell, grid)
                
                if value > 0:
                    grid.set_cell(current_cell, value)

    return grid.normalize()