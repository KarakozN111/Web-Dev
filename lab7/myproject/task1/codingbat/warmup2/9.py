def string_match(a, b):
    length = min(len(a), len(b))
    return sum(a[i:i+2] == b[i:i+2] for i in range(length - 1))

print(string_match('xxcaazz', 'xxbaaz'))  
print(string_match('abc', 'abc'))        
print(string_match('abc', 'axc'))        
