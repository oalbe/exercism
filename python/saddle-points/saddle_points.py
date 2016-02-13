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

def saddle_points(matrix):
    if [] == matrix:
        return set()
    
    saddles = set()
    
    cols = parse_columns(matrix)
    
    # Loop all the lines.
    rows_limit = len(matrix)
    for i in range(rows_limit):
        # For each line, find the max element in that line.
        maxRowElem = max(matrix[i])
                
        # Extract the coordinates of that element and its duplicates.
        maxCoord = coordinatesRow(maxRowElem, matrix[i], i)
        
        coordLimit = len(maxCoord)
        for c in range(coordLimit):
            rowIndex = maxCoord[c][0]
            colIndex = maxCoord[c][1]

            # For each column of the found max elements, find the min element in that column.
            minColElem = min(cols[colIndex])

            if (minColElem == maxRowElem):
                saddles.add((rowIndex, colIndex))
    
    return saddles