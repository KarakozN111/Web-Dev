def combo_string(a, b):
    return a + b + a if len(a) < len(b) else b + a + b

print(combo_string('Hello', 'hi'))  
print(combo_string('hi', 'Hello'))  
print(combo_string('aaa', 'b'))  
