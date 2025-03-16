def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    return 0 if 13 <= n <= 19 and n not in (15, 16) else n

print(no_teen_sum(1, 2, 3))  
print(no_teen_sum(2, 13, 1))  
print(no_teen_sum(2, 1, 14))  
