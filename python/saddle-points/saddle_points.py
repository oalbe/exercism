def coordinatesRow(element, row, row_index):
    coordinates = []
    
    row_len = len(row)
    for i in range(row_len):
        if (element == row[i]):
            coordinates.append([row_index, i])
    
    return coordinates

def parse_columns(matrix):
    columns = []

    cols_num = len(matrix[0])
    rows_num = len(matrix)
    for i in range(rows_num):
        column = []
        
        for j in range(cols_num):
            if j < rows_num:
                column.append(matrix[j][i])
        
        columns.append(column)
    
    return columns

def validate_matrix(matrix):
    test_len = len(matrix[0])
    for row in matrix:
        if test_len != len(row):
            return False
    
    return True

def saddle_points(matrix):
    if [] == matrix:
        return set()
    
    if not validate_matrix(matrix):
        raise ValueError("The matrix is irregular.")
    
    saddles = set()
    
    cols = parse_columns(matrix)
    
    rows_limit = len(matrix)
    for i in range(rows_limit):
        max_row_elem = max(matrix[i])
                
        max_coordinates = coordinatesRow(max_row_elem, matrix[i], i)
        
        coordinates_limit = len(max_coordinates)
        for c in range(coordinates_limit):
            row_index = max_coordinates[c][0]
            col_index = max_coordinates[c][1]

            min_col_elem = min(cols[col_index])

            if (min_col_elem == max_row_elem):
                saddles.add((row_index, col_index))
    
    return saddles