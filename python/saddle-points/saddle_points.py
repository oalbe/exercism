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
    rows = len(matrix)
    
    test_len = len(matrix[0])
    for i in range(1, rows - 1):
        current_len = len(matrix[i])

        if test_len != current_len:
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
        maxRowElem = max(matrix[i])
                
        maxCoord = coordinatesRow(maxRowElem, matrix[i], i)
        
        coordLimit = len(maxCoord)
        for c in range(coordLimit):
            rowIndex = maxCoord[c][0]
            colIndex = maxCoord[c][1]

            minColElem = min(cols[colIndex])

            if (minColElem == maxRowElem):
                saddles.add((rowIndex, colIndex))
    
    return saddles