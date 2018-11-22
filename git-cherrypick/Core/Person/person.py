class Person:
    def __init__(self, first_name, last_name):
        self.last_name = last_name;
        self.first_name = first_name;

    def getFullName(self):
        print(self.first_name + ' ' + self.last_name)

    def printItNice(self):
        print('<<< Firstname: '+self.first_name+' Lastname: '+ self.last_name+ ' >>>>')

    def printItNice2(self):
        print('<<<2 Firstname: '+self.first_name+' Lastname: '+ self.last_name+ ' 2>>>>')