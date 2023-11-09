### Python - Introduction

Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.

### Strings

Strings are amongst the most popular types in Python. We can create them simply by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating strings is as simple as assigning a value to a variable.

```python
>>> var1 = 'Hello World!'
>>> var2 = "Python Programming"
```

Strings are indexed and have a length

```python
>>> var1[0]
'H'
>>> var2[1:5]
'ytho'
>>> len(var1)
12
```

It can also contain negative indices

```python
>>> var1[-1]
'!'
>>> var2[-5:-1]
'mmin'
```

Common string methods

```python
>>> var1.upper()
'HELLO WORLD!'
>>> var2.lower()
'python programming'
>>> var1.replace('World', 'Universe')
'Hello Universe!'
>>> var2.split(' ')
['Python', 'Programming']
```


### Lists

Lists are the most versatile of Python's compound data types. A list contains items separated by commas and enclosed within square brackets ([]). To some extent, lists are similar to arrays in C. One difference between them is that all the items belonging to a list can be of different data type.

It follows the same indexing and length rules as strings

```python
>>> list1 = ['abcd', 786, 2.23, 'john', 70.2]
>>> list2 = [123, 'john']
>>> list1[0]
'abcd'
>>> list2[1:2]
['john']
>>> len(list1)
5
```

Common list methods

```python
>>> list1.append(100)
>>> list1
['abcd', 786, 2.23, 'john', 70.2, 100]
>>> list1.remove('john')
>>> list1
['abcd', 786, 2.23, 70.2, 100]
>>> list1.reverse()
>>> list1
[100, 70.2, 2.23, 786, 'abcd']
>>> list1.sort()
>>> list1
[2.23, 70.2, 100, 786, 'abcd']
```

### Tuples

A tuple is another sequence data type that is similar to the list. A tuple consists of a number of values separated by commas. Unlike lists, however, tuples are enclosed within parentheses, and they are immutable.

```python
>>> tuple1 = ('abcd', 786, 2.23, 'john', 70.2)
>>> tuple2 = (123, 'john')
>>> tuple1[0]
'abcd'
>>> tuple2[1:2]
['john']
>>> len(tuple1)
5
```

### Dictionary

Python's dictionaries are kind of hash table type. They work like associative arrays or hashes found in Perl and consist of key-value pairs. A dictionary key can be almost any Python type, but are usually numbers or strings. Values, on the other hand, can be any arbitrary Python object.

```python
>>> dict1 = {}
>>> dict1['one'] = "This is one"
>>> dict1[2] = "This is two"
>>> dict2 = {'name': 'john','code':6734, 'dept': 'sales'}
>>> dict1['one']
'This is one'
>>> dict2.keys()
['code', 'name', 'dept']
>>> dict2.values()
[6734, 'john', 'sales']
```

Common dictionary methods

```python
>>> dict1.clear()
>>> dict1
{}
>>> dict2.copy()
{'code': 6734, 'name': 'john', 'dept': 'sales'}
>>> dict2.get('name')
'john'
>>> dict2.has_key('dept')
True
>>> dict2.items()
[('code', 6734), ('name', 'john'), ('dept', 'sales')]
>>> dict2.keys()
['code', 'name', 'dept']
>>> dict2.values()
[6734, 'john', 'sales']
```

### Functions

A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.

```python
>>> def printme( str ):
...    '''This prints a passed string into this function'''
...    print str
...    return
...
>>> printme("hello")
hello
```

### Classes

Python supports object-oriented programming and writing classes is pretty simple. Just use the keyword `class` and you're good to go.

```python
>>> class Employee:
...    'Common base class for all employees'
...    empCount = 0
...
...    def __init__(self, name, salary):
...       self.name = name
...       self.salary = salary
...       Employee.empCount += 1
...
...    def displayCount(self):
...       print "Total Employee %d" % Employee.empCount
...
...    def displayEmployee(self):
...       print "Name : ", self.name,  ", Salary: ", self.salary
...
>>> emp1 = Employee("Zara", 2000)
>>> emp2 = Employee("Manni", 5000)
>>> emp1.displayEmployee()
Name :  Zara , Salary:  2000
>>> emp2.displayEmployee()
Name :  Manni , Salary:  5000
>>> print "Total Employee %d" % Employee.empCount
Total Employee 2
```


