def initialize_matrix():
    matrix = []
    
    for i in range(8):
        matrix.append([])
        for j in range(8):
            matrix[i].append('_')

    return matrix

def place_queens(white_queen, black_queen, board):
    board[white_queen[0]][white_queen[1]] = "W"
    board[black_queen[0]][black_queen[1]] = "B"
    
    return board

def valid_queen_position(queen):
    for coordinate in queen:
        if coordinate < 0:
            return False
        
        if coordinate > 7:
            return False
    
    return True

def queen_overlap(white, black):
    if white[0] == black[0] and white[1] == black[1]:
        return True
    
    return False
    
def board(white_queen, black_queen):
    if queen_overlap(white_queen, black_queen):
        raise ValueError("Queen positions can't overlap.")

    if not (valid_queen_position(white_queen) and valid_queen_position(black_queen)):
        raise ValueError("Queen position out of range.")

    return [''.join(row) for row in place_queens(white_queen, black_queen, initialize_matrix())]

def can_attack(white, black):
    if queen_overlap(white, black):
        raise ValueError("Queen positions can't overlap.")

    if not (valid_queen_position(white) and valid_queen_position(black)):
        raise ValueError("Queen position out of range.")

    # Check if they are in the same line
    if (white[0] == black[0]):
        return True
    
    # Check if they are in the same column
    if (white[1] == black[1]):
        return True
    
    # Check if they are in the same diagonal
    deltax = white[0] - black[0]
    deltay = white[1] - black[1]

    if (deltay == -deltax):
        return True

    if (deltay == deltax):
        return True
    
    return False