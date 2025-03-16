def make_chocolate(small, big, goal):
    max_big_bars = min(big, goal // 5)
    remaining = goal - max_big_bars * 5
    
    return remaining if remaining <= small else -1

print(make_chocolate(4, 1, 9))  
print(make_chocolate(4, 1, 10))  
print(make_chocolate(4, 1, 7))  
