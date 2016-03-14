class reverse_lookup_dict:
    def __init__(self, dictionary):
        inverse_dictionary = {value: key for key, value in dictionary.items()}
        self.__dictionary = dict(list(dictionary.items()) + list(inverse_dictionary.items()))
    
    def insert(self, key, value):
        self.__dictionary[key] = value
        self.__dictionary[value] = key

    def remove(self, key):
       self.__dictionary.pop(self.__dictionary.pop(key))

    def get(self, key):
       return self.__dictionary[key]
    
    def has(self, key):
        return key in self.__dictionary
