class Matrix:
    def __init__(self, string_matrix):
        self.str_matrix = string_matrix
        self.rows = self.parse_rows()
        self.columns = self.parse_columns()
    
    def parse_rows(self):
        str_rows = self.str_matrix.split('\n')
        rows = []

        for row in str_rows:
            split_row = row.split(' ')
            new_row = []
            for item in split_row:
                new_row.append(int(item))
            
            rows.append(new_row)
        
        return rows
    
    def parse_columns(self):
        columns = []
    
        cols_num = len(self.rows)
        rows_num = len(self.rows[0])
        for i in range(rows_num):
            column = []
            
            for j in range(cols_num):
                column.append(self.rows[j][i])
            
            columns.append(column)
        
        return columns