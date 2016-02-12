class Matrix:
    def __init__(self, string_matrix):
        self.str_matrix = string_matrix
        self.rows = self.parse_rows()
    
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