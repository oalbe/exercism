def init_matrix():
    return [['_' for j in range(8)] for i in range(8)]

def place_queens(white_queen, black_queen, board):
    board[white_queen[0]][white_queen[1]] = "W"
    board[black_queen[0]][black_queen[1]] = "B"

    return board

def valid_queen_position(queen):
    for coordinate in queen:
        if coordinate < 0 or coordinate > 7:
            return False

    return True

def queen_overlap(white, black):
    return white[0] == black[0] and white[1] == black[1]

def valid_queens(white, black):
    if queen_overlap(white, black):
        return False

    return valid_queen_position(white) and valid_queen_position(black)

def board(white_queen, black_queen):
    if not valid_queens(white_queen, black_queen):
        raise ValueError("Your queens got problems.")

    return [''.join(row) for row in place_queens(white_queen, black_queen, init_matrix())]

def can_attack(white, black):
    if not valid_queens(white, black):
        raise ValueError("Your queens got problems.")

    # Check if they are in the same line
    if white[0] == black[0]:
        return True

    # Check if they are in the same column
    if white[1] == black[1]:
        return True

    # Check if they are in the same diagonal
    deltax = white[0] - black[0]
    deltay = white[1] - black[1]

    if deltay == -deltax:
        return True

    if deltay == deltax:
        return True

    return False