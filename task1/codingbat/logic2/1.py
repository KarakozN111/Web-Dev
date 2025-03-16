def make_bricks(small, big, goal):
    return goal <= small + big * 5 and goal % 5 <= small

print(make_bricks(3, 1, 8))  
print(make_bricks(3, 1, 9))  
print(make_bricks(3, 2, 10))  
