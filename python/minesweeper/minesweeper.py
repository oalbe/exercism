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
        return [row[1:-1] for row in self.__board[1:-1]]
    
    def valid(self):
        # Validate rows lengths, because a grid with rows of 
        # different lengths is not a valid grid
        for row_index, row in enumerate(self.__board[1:]):
            if len(row) != len(self.__board[row_index - 1]):
                return False
        
        # Validate rows well-formation, because a border-less grid isn't valid
        for row in self.__board[1:-1]:
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
        first_last_row = '+' + ('-' * self.row_len()) + '+'

        normalized_grid = [('|' + row + '|') for row in self.rows]
        normalized_grid.insert(0, first_last_row)
        normalized_grid.append(first_last_row)
        
        return normalized_grid

def row_mines_value(cell, grid):
    row_mines = 0
    
    # Checks the cell on the left
    if (cell.col - 1) >= 0:
        if '*' == grid.cell(cell.row, cell.col - 1):
            row_mines += 1
    
    # Checks the cell on the right
    if (cell.col + 1) < grid.row_len():
        if '*' == grid.cell(cell.row, cell.col + 1):
            row_mines += 1

    return row_mines

def column_mines_value(cell, grid):
    col_mines = 0
    
    # Checks the cell above
    if (cell.row - 1) >= 0:
        if '*' == grid.cell(cell.row - 1, cell.col):
            col_mines += 1
    
    # Checks the cell below
    if (cell.row + 1) < grid.len():
        if '*' == grid.cell(cell.row + 1, cell.col):
            col_mines += 1
    
    return col_mines

def diagonal_mines_value(cell, grid):
    diagonal_mines = 0
            
    if (cell.row + 1) < grid.len():
        # Checks the right-down cell
        if ((cell.col + 1) < grid.row_len()) and '*' == grid.cell(cell.row + 1, cell.col + 1):
            diagonal_mines += 1

        # Checks the right-up cell        
        if ((cell.col - 1) >= 0) and '*' == grid.cell(cell.row + 1, cell.col - 1):
            diagonal_mines += 1

    if (cell.row - 1) >= 0:
        # Checks the left-up cell
        if (cell.col - 1) >= 0 and '*' == grid.cell(cell.row - 1, cell.col - 1):
            diagonal_mines += 1
        
        # Checks the left-down cell
        if ((cell.col + 1) < grid.row_len()) and '*' == grid.cell(cell.row - 1, cell.col + 1):
            diagonal_mines += 1

    return diagonal_mines

def calculate_cell_value(cell, grid):
    return diagonal_mines_value(cell, grid) + \
           column_mines_value(cell, grid) + \
           row_mines_value(cell, grid)

def board(input_board):
    grid = Grid(input_board)
    if not grid.valid():
        raise ValueError("Invalid Grid.")

    for row_index, row in enumerate(grid.rows):
        for cell_index, cell_content in enumerate(row):
            if ' ' == cell_content:
                current_cell = Cell(row_index, cell_index)
                
                value = calculate_cell_value(current_cell, grid)
                if value > 0:
                    grid.set_cell(current_cell, value)

    return grid.normalize()